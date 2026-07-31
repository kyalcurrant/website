// Cloudflare Pages Function: GET /api/podcast-episodes
// Proxies and parses The To Be Podcast RSS feed (Spotify for Podcasters /
// Anchor), because anchor.fm sends no CORS headers. Cached at the edge for
// 15 minutes via the Cache API + Cache-Control.
const FEED_URL = "https://anchor.fm/s/eee2180c/podcast/rss";

const pick = (block, re) => {
  const m = block.match(re);
  return m ? m[1].trim() : "";
};

const cleanText = (s) =>
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

function parsePodcastFeed(xml) {
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

export async function onRequestGet(context) {
  const cache = caches.default;
  const cacheKey = new Request(new URL(context.request.url).origin + "/api/podcast-episodes");
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const resp = await fetch(FEED_URL, {
    headers: { "User-Agent": "kyalncurrant.com website" },
  });
  if (!resp.ok) {
    return new Response(JSON.stringify({ error: "Podcast feed unavailable" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = parsePodcastFeed(await resp.text());
  if (!data.episodes.length) {
    return new Response(JSON.stringify({ error: "Podcast feed unavailable" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=900",
    },
  });
  context.waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}
