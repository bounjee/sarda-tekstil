import type { MetadataRoute } from 'next'
import { readJsonFile, productsFileName } from '@/lib/fs-db'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ['', '/products', '/about', '/contact', '/quality-policy', '/sustainability'].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7,
  }))
  const products = await readJsonFile<{ id: number }[]>(productsFileName, [])
  return [
    ...pages,
    ...products.map((p) => ({ url: `${SITE_URL}/product/${p.id}`, changeFrequency: 'weekly' as const, priority: 0.8 })),
  ]
}
