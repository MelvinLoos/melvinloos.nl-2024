import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  output: "server",
  adapter: netlify()
});