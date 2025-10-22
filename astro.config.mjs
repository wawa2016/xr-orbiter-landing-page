// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wawa2016.github.io",
  base: "/xr-orbiter-landing-page",
  integrations: [mdx(), sitemap()],
});
