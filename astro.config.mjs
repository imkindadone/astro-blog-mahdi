// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots"; 
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://sonoluminar.org",
  integrations: [mdx(), sitemap(),robots()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
