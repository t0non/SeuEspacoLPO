import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seuespacolpo.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs here as you create more pages
  ];
}
