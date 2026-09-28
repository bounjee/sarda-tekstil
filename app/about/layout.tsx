import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: "Gaziantep Şahinbey'de kilim ve bukle üreten Sarda Tekstil hakkında.",
  alternates: { canonical: '/about' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
