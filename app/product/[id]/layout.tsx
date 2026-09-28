import type { Metadata } from 'next'
import { readJsonFile, productsFileName } from '@/lib/fs-db'

type Product = { id: number; name: string; image: string; sizes: string[] }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const products = await readJsonFile<Product[]>(productsFileName, [])
  const product = products.find((p) => p.id === Number(id))
  if (!product) return { title: 'Ürün bulunamadı', robots: { index: false } }
  const description = `${product.name} - Sarda Tekstil. Ölçü ve fiyat bilgisi için WhatsApp üzerinden ulaşın.`
  return {
    title: product.name,
    description,
    alternates: { canonical: `/product/${product.id}` },
    openGraph: {
      title: product.name,
      description,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
