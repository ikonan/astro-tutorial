import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://ikonan.github.io",
  base: "/astro-tutorial",

  adapter: nodejs({ mode: "standalone" }),
  output: "hybrid",
});
