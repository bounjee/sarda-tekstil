import { NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile, settingsFileName, activityFileName } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface Settings {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  socialMedia: {
    facebook: string
    instagram: string
    linkedin: string
    twitter: string
    youtube?: string
    tiktok?: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
  }
  footer: {
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
  features: {
    showPrices: boolean
    enableCatalogDownload: boolean
    showContactForm: boolean
    enableNewsletter: boolean
  }
}

const defaultSettings: Settings = {
  siteName: 'Sarda Tekstil',
  siteDescription: 'Geleneksel sanatın modern yorumu ile kaliteli tekstil ürünleri üretiyoruz.',
  contactEmail: 'info@sardatekstil.com',
  contactPhone: '+90 342 123 45 67',
  contactAddress: 'Gaziantep Organize Sanayi Bölgesi, 1. Cadde No: 25, 27000 Şehitkamil / Gaziantep',
  socialMedia: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: ''
  },
  seo: {
    metaTitle: 'Sarda Tekstil - Kilim ve Bukle Üretimi',
    metaDescription: "Gaziantep'te 25 yıldır kaliteli kilim ve bukle üretimi yapan Sarda Tekstil. Geleneksel sanatın modern yorumu.",
    keywords: 'kilim, bukle, tekstil, Gaziantep, el dokuma'
  },
  footer: {
    year: new Date().getFullYear(),
    company: 'Sarda Tekstil',
    address: 'Gaziantep, Türkiye',
    phone: '+90 342 123 45 67',
    email: 'info@sardatekstil.com',
    productsTitle: 'Ürünler',
    corporateTitle: 'Kurumsal',
    contactTitle: 'İletişim',
    productsLinksTexts: ['Kilim Koleksiyonu','Bukle Serisi','Özel Tasarım'],
    corporateLinksTexts: ['Hakkımızda','Kalite Politikası','Sürdürülebilirlik'],
    copyrightText: 'Tüm hakları saklıdır.'
  },
  features: {
    showPrices: false,
    enableCatalogDownload: true,
    showContactForm: true,
    enableNewsletter: false
  }
}

export async function GET() {
  try {
    const settings = await readJsonFile<Settings>(settingsFileName, defaultSettings)
    return NextResponse.json(settings, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ayarlar yüklenemedi' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const incoming = await request.json()
    const current = await readJsonFile<Settings>(settingsFileName, defaultSettings)
    const merged: Settings = { 
      ...current, 
      ...incoming,
      seo: { ...current.seo, ...incoming.seo },
      socialMedia: { ...current.socialMedia, ...incoming.socialMedia },
      features: { ...current.features, ...incoming.features },
      footer: { ...current.footer, ...incoming.footer },
    }
    await writeJsonFile(settingsFileName, merged)
    const activities = await readJsonFile<any[]>(activityFileName, [])
    activities.unshift({ id: Date.now(), type: 'settings_updated', message: 'Site ayarları güncellendi', createdAt: Date.now() })
    await writeJsonFile(activityFileName, activities)
    return NextResponse.json(merged, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ayarlar kaydedilemedi' }, { status: 500 })
  }
}


