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

  app.use(express.static(staticPath));

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

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
