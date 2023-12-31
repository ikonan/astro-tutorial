import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ikonan.github.io",
  base: "/astro-tutorial"

  // SSR 服务端渲染
  // adapter: nodejs({ mode: "standalone" }),
  // output: "hybrid",
  ,
  integrations: [tailwind()]
});