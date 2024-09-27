/// <reference types="vitest" />
/// <reference types="vitest/config" />
/// <reference types="vitest/globals" />

import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    // Vitest configuration options
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      include: ["src/components/*"],
      reporter: ["text"],
    },
  },
});
