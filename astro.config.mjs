import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://golgharpatna.com';
const integrations = SITE ? [sitemap()] : [];

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  integrations,
  vite: { plugins: [tailwindcss()] }
});
