// @ts-check

import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  preview: {
    port: 8080,
    // exit if the port is already in use, instead of automatically trying the next available port.
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    // origin to serve assets from. before i run the server on 3000, so image not showing
    // when i change port to serve to 8080 image showing
    origin: "http://0.0.0.0:8080",
  },
});
