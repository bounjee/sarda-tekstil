import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Sarda Tekstil iletişim: Ünaldı, Mıhcı Zekeriya Sk. No:31, 27100 Şahinbey/Gaziantep. Telefon ve WhatsApp: 0534 865 40 72.',
  alternates: { canonical: '/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
