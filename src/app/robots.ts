import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/login'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'Anthropic-AI', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/login'],
      },
    ],
    sitemap: 'https://www.bitsun-inc.com/sitemap.xml',
  }
}
