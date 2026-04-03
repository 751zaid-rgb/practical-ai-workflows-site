import { siteConfig } from '@/data/site';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}${siteConfig.basePath}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
