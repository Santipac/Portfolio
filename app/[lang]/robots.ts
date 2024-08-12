import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: ['https://santiagopacini.com/es/sitemap.xml', 'https://santiagopacini.com/en/sitemap.xml'],
  }
}