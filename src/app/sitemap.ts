import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alansororphancare.com';

  // Assuming these are your main pages
  const staticRoutes = [
    '',
    '/about',
    '/programs',
    '/get-involved',
    '/contact',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
