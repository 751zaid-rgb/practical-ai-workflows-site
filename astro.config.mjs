import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://751zaid-rgb.github.io/practical-ai-workflows-site';

export default defineConfig({
  site,
  base: '/practical-ai-workflows-site',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
});
