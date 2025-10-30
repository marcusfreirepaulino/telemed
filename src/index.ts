import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

// Health check endpoint
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

const port = process.env.PORT ?? 3000;

const server = serve({
  port: Number(port),
  fetch: app.fetch,
});

console.debug(`Server running on port: ${port}`);

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      console.error(`SIGTERM: ${err}`);
      process.exit(1);
    }
    process.exit(0);
  });
});
