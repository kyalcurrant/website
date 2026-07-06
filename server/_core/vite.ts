import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  
  // Serve static HTML files (podcast.html, testimonials.html, workshop.html, etc.)
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl.split("?")[0]; // Remove query string
    const pathname = url === "/" ? "/index.html" : url;
    
    // Check if a static HTML file exists
    const clientDir = path.resolve(import.meta.dirname, "../..", "client");
    const staticFilePath = path.resolve(clientDir, pathname.slice(1)); // Remove leading /
    
    try {
      if (pathname.endsWith(".html") && fs.existsSync(staticFilePath)) {
        // Serve the static HTML file
        const content = await fs.promises.readFile(staticFilePath, "utf-8");
        const page = await vite.transformIndexHtml(url, content);
        return res.status(200).set({ "Content-Type": "text/html" }).end(page);
      }
    } catch (e) {
      console.error(`Error serving static file ${staticFilePath}:`, e);
    }
    
    // Fall back to index.html for React SPA
    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
