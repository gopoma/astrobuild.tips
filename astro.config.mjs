import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://46eb7ccd.astrobuild-tips-58z.pages.dev",
  integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()]
});
