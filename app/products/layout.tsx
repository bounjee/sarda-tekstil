import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünler',
  description: 'Sarda Tekstil kilim ve bukle ürünleri. Ölçü seçenekleri ve fiyat bilgisi için WhatsApp üzerinden ulaşın.',
  alternates: { canonical: '/products' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
