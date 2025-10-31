
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alansororphancare.com';

  const staticRoutes = [
    '',
    '/about',
    '/programs',
    '/get-involved',
    '/contact',
    '/gallery',
    '/stories',
    '/team'
  ];

  const staticRouteUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  const blogPostUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogIndexUrl = {
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  };


  return [...staticRouteUrls, blogIndexUrl, ...blogPostUrls];
}
