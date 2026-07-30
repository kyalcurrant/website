import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // extensions: ["html"] lets clean URLs like /workshop serve workshop.html
  app.use(express.static(staticPath, { extensions: ["html"] }));

  // ── Podcast feed proxy ────────────────────────────────────────────────
  // The To Be Podcast RSS feed (Spotify for Podcasters / Anchor). Proxied
  // server-side because anchor.fm sends no CORS headers, then cached so we
  // don't hit the feed on every page view.
  const PODCAST_FEED_URL = "https://anchor.fm/s/eee2180c/podcast/rss";
  const PODCAST_CACHE_TTL_MS = 15 * 60 * 1000;
  let podcastCache: { data: unknown; fetchedAt: number } | null = null;

  const pick = (block: string, re: RegExp): string => {
    const m = block.match(re);
    return m ? m[1].trim() : "";
  };
  const cleanText = (s: string): string =>
    s
      .replace(/^<!\[CDATA\[/, "")
      .replace(/\]\]>$/, "")
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();

  function parsePodcastFeed(xml: string) {
    const channelImage = pick(xml, /<itunes:image href="([^"]+)"/);
    const episodes = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .map((m) => m[1])
      .map((b) => ({
        title: cleanText(pick(b, /<title>([\s\S]*?)<\/title>/)),
        description: cleanText(pick(b, /<description>([\s\S]*?)<\/description>/)).slice(0, 300),
        pubDate: pick(b, /<pubDate>([\s\S]*?)<\/pubDate>/),
        duration: pick(b, /<itunes:duration>([\s\S]*?)<\/itunes:duration>/),
        audioUrl: pick(b, /<enclosure[^>]*url="([^"]+)"/),
        image: pick(b, /<itunes:image href="([^"]+)"/) || channelImage,
      }))
      .filter((e) => e.audioUrl);
    return { image: channelImage, count: episodes.length, episodes };
  }

  app.get("/api/podcast-episodes", async (_req, res) => {
    try {
      if (podcastCache && Date.now() - podcastCache.fetchedAt < PODCAST_CACHE_TTL_MS) {
        res.set("Cache-Control", "public, max-age=900");
        return res.json(podcastCache.data);
      }
      const resp = await fetch(PODCAST_FEED_URL, {
        headers: { "User-Agent": "kyalncurrant.com website" },
      });
      if (!resp.ok) throw new Error(`Feed responded ${resp.status}`);
      const data = parsePodcastFeed(await resp.text());
      if (!data.episodes.length) throw new Error("Feed parsed to zero episodes");
      podcastCache = { data, fetchedAt: Date.now() };
      res.set("Cache-Control", "public, max-age=900");
      res.json(data);
    } catch (error) {
      console.error("Podcast feed error:", error);
      if (podcastCache) return res.json(podcastCache.data);
      res.status(502).json({ error: "Podcast feed unavailable" });
    }
  });

  // Proxy /manus-storage requests to the Manus storage service
  app.get("/manus-storage/:key", async (req, res) => {
    try {
      const key = req.params.key;
      const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
      const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

      if (!forgeBaseUrl || !forgeKey) {
        // Fallback: try to serve from public directory
        const filePath = path.join(staticPath, "manus-storage", key);
        return res.sendFile(filePath);
      }

      // Request presigned URL from Manus storage service
      const forgeUrl = new URL("v1/storage/presign/get", forgeBaseUrl + "/");
      forgeUrl.searchParams.set("path", key);

      const forgeResp = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${forgeKey}` },
      });

      if (!forgeResp.ok) {
        res.writeHead(502, { "Content-Type": "text/plain" });
        res.end("Storage backend error");
        return;
      }

      const { url } = (await forgeResp.json()) as { url: string };
      if (!url) {
        res.writeHead(502, { "Content-Type": "text/plain" });
        res.end("Empty signed URL");
        return;
      }

      // Redirect to the signed URL
      res.writeHead(307, { Location: url, "Cache-Control": "no-store" });
      res.end();
    } catch (error) {
      console.error("Storage proxy error:", error);
      res.writeHead(502, { "Content-Type": "text/plain" });
      res.end("Storage proxy error");
    }
  });

  // Fall back to index.html for unknown page routes; 404 missing assets
  // (css/js/images) so broken references fail loudly instead of returning HTML
  app.get("*", (req, res) => {
    if (req.accepts("html") && !path.extname(req.path)) {
      res.sendFile(path.join(staticPath, "index.html"));
    } else {
      res.status(404).end();
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
