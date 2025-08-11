import Link from "next/link"
import { useEffect, useState } from "react"

interface FooterSettings {
  year: number
  company: string
  address: string
  phone: string
  email: string
  productsTitle: string
  corporateTitle: string
  contactTitle: string
  productsLinksTexts: string[]
  corporateLinksTexts: string[]
  copyrightText?: string
}

export function SiteFooter() {
  const [footer, setFooter] = useState<FooterSettings | null>(null)
  const [social, setSocial] = useState<{ facebook?: string; instagram?: string; linkedin?: string; twitter?: string; youtube?: string; tiktok?: string } | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/settings', { cache: 'no-store' })
        if (res.ok) {
          const json = await res.json()
          setFooter(json.footer)
          setSocial(json.socialMedia)
        }
      } catch {}
    }
    load()
  }, [])

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">{footer?.company ?? 'Sarda Tekstil'}</span>
            </div>
            <p className="text-gray-400">
              Geleneksel sanatın modern yorumu ile kaliteli tekstil ürünleri üretiyoruz.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-gray-400">
              {social?.facebook && <Link href={social.facebook} target="_blank" className="hover:text-white">Facebook</Link>}
              {social?.instagram && <Link href={social.instagram} target="_blank" className="hover:text-white">Instagram</Link>}
              {social?.linkedin && <Link href={social.linkedin} target="_blank" className="hover:text-white">LinkedIn</Link>}
              {social?.twitter && <Link href={social.twitter} target="_blank" className="hover:text-white">Twitter</Link>}
              {social?.youtube && <Link href={social.youtube} target="_blank" className="hover:text-white">YouTube</Link>}
              {social?.tiktok && <Link href={social.tiktok} target="_blank" className="hover:text-white">TikTok</Link>}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{footer?.productsTitle ?? 'Ürünler'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-white transition-colors">{footer?.productsLinksTexts?.[0] ?? 'Kilim Koleksiyonu'}</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">{footer?.productsLinksTexts?.[1] ?? 'Bukle Serisi'}</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">{footer?.productsLinksTexts?.[2] ?? 'Özel Tasarım'}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{footer?.corporateTitle ?? 'Kurumsal'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">{footer?.corporateLinksTexts?.[0] ?? 'Hakkımızda'}</Link></li>
              <li><Link href="/quality-policy" className="hover:text-white transition-colors">{footer?.corporateLinksTexts?.[1] ?? 'Kalite Politikası'}</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">{footer?.corporateLinksTexts?.[2] ?? 'Sürdürülebilirlik'}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{footer?.contactTitle ?? 'İletişim'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{footer?.address ?? 'Gaziantep, Türkiye'}</li>
              <li>{footer?.phone ?? '+90 342 123 45 67'}</li>
              <li>{footer?.email ?? 'info@sardatekstil.com'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {footer?.year ?? new Date().getFullYear()} {footer?.company ?? 'Sarda Tekstil'}. {footer?.copyrightText ?? 'Tüm hakları saklıdır.'}</p>
        </div>
      </div>
    </footer>
  )
}


