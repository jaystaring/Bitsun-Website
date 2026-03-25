import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bitsun-inc.com'
  
  const staticPages = [
    { path: '', priority: 1, changeFreq: 'daily' as const },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/products/omc-oms', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/distribution', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/ecommerce', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/pos', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/ai', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/ai-platform', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/ai-agent', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/solutions', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/solutions/scenario/sales', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/scenario/omnichannel', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/scenario/merchandise', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/scenario/ecommerce', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/industry/beauty', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/industry/health', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/solutions/industry/life', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/cases', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/resources', priority: 0.6, changeFreq: 'weekly' as const },
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
    alternates: {
      languages: {
        'zh-CN': `${baseUrl}${page.path}`,
      },
    },
  }))
}
