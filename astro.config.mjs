// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
   site:'https://cristack88.github.io',
  integrations: [tailwind(), react()],
  {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components'
      }
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true,
    port: 4321,
  }
});
