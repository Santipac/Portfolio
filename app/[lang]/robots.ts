import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: ['https://santiagopacini.vercel.app/es/sitemap.xml', 'https://santiagopacini.vercel.app/en/sitemap.xml'],
  }
}