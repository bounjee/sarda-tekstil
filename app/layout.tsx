import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sardatekstil.com'),
  title: {
    default: "Sarda Tekstil - Geleneksel Sanatın Modern Yorumu",
    template: "%s | Sarda Tekstil"
  },
  description: "Gaziantep'in köklü tekstil geleneğini modern tasarım anlayışıyla buluşturarak, kilim ve bukle üretiminde öncü olmaya devam ediyoruz.",
  keywords: ["kilim", "bukle", "tekstil", "Gaziantep", "el dokuma", "geleneksel", "modern", "kaliteli kumaş"],
  authors: [{ name: "Sarda Tekstil" }],
  creator: "Sarda Tekstil",
  publisher: "Sarda Tekstil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://sardatekstil.com',
    siteName: 'Sarda Tekstil',
    title: 'Sarda Tekstil - Geleneksel Sanatın Modern Yorumu',
    description: 'Gaziantep\'in köklü tekstil geleneğini modern tasarım anlayışıyla buluşturarak, kilim ve bukle üretiminde öncü olmaya devam ediyoruz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarda Tekstil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarda Tekstil - Geleneksel Sanatın Modern Yorumu',
    description: 'Gaziantep\'in köklü tekstil geleneğini modern tasarım anlayışıyla buluşturarak, kilim ve bukle üretiminde öncü olmaya devam ediyoruz.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  )
}
