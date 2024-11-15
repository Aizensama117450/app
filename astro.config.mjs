import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import deno from '@deno/astro-adapter';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: deno()
});