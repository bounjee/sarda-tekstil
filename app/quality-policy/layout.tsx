import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalite Politikası',
  description: 'Sarda Tekstil kalite politikası ve üretim anlayışı.',
  alternates: { canonical: '/quality-policy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
