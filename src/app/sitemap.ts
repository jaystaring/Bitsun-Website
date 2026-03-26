import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bitsun-inc.com'
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/products/omc-oms',
    '/products/distribution',
    '/products/ecommerce',
    '/products/pos',
    '/products/ai',
    '/solutions',
    '/solutions/scenario/sales',
    '/solutions/scenario/omnichannel',
    '/solutions/scenario/merchandise',
    '/solutions/scenario/ecommerce',
    '/solutions/industry/beauty',
    '/solutions/industry/health',
    '/solutions/industry/life',
    '/resources',
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page.split('/').length === 2 ? 0.9 : 0.8,
  }))
}
