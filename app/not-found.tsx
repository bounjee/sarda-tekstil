import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 space-y-4">
        <h1 className="text-4xl font-bold text-black">Sayfa bulunamadı</h1>
        <p className="text-gray-600">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-md">Ana Sayfaya Dön</Link>
      </main>
      <SiteFooter />
    </div>
  )
}
