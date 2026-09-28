import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik',
  description: 'Sarda Tekstil sürdürülebilirlik yaklaşımı.',
  alternates: { canonical: '/sustainability' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
