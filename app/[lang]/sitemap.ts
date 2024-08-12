import { projects } from '@/constants/projects';

export default function sitemap() {
  const baseUrl = 'https://santiagopacini.com';
  const projectsUrlsES = projects['es'].map(project => {
    return {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    };
  });
  const projectsUrlsEN = projects['en'].map(project => {
    return {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    };
  });
  const projectsUrls = [...projectsUrlsEN, ...projectsUrlsES];
  return [
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/en/about`, lastModified: new Date() },
    { url: `${baseUrl}/en/contact`, lastModified: new Date() },
    { url: `${baseUrl}/en/projects`, lastModified: new Date() },
    { url: `${baseUrl}/es`, lastModified: new Date() },
    { url: `${baseUrl}/es/about`, lastModified: new Date() },
    { url: `${baseUrl}/es/contact`, lastModified: new Date() },
    { url: `${baseUrl}/es/projects`, lastModified: new Date() },
    ...projectsUrls,
  ];
}
