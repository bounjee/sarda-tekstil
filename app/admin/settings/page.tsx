'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, Save, Globe, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AdminSettings() {
  const [settings, setSettings] = useState({
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
      metaDescription: 'Gaziantep\'te 25 yıldır kaliteli kilim ve bukle üretimi yapan Sarda Tekstil. Geleneksel sanatın modern yorumu.',
      keywords: 'kilim, bukle, tekstil, Gaziantep, el dokuma'
    },
    features: {
      showPrices: false,
      enableCatalogDownload: true,
      showContactForm: true,
      enableNewsletter: false
    }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/settings', { cache: 'no-store' })
        if (res.ok) {
          const json = await res.json()
          setSettings(json)
        }
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleSave = async () => {
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    if (!res.ok) {
      alert('Ayarlar kaydedilemedi')
      return
    }
    alert('Ayarlar başarıyla kaydedildi!')
  }

  const updateSetting = (path: string, value: any) => {
    setSettings(prev => {
      const keys = path.split('.')
      const newSettings = { ...prev }
      let current: any = newSettings
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
      }
      
      current[keys[keys.length - 1]] = value
      return newSettings
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span>Admin Panel</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">Site Ayarları</span>
            </div>
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Kaydet
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Site Ayarları</h1>
            <p className="text-gray-600 mt-2">Web sitenizin genel ayarlarını buradan yönetebilirsiniz</p>
            {loading && <p className="text-gray-400 mt-2">Yükleniyor...</p>}
          </div>

          <div className="space-y-8">
            {/* Genel Bilgiler */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Genel Bilgiler</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site Adı</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => updateSetting('siteName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">İletişim E-postası</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => updateSetting('contactEmail', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Açıklaması</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => updateSetting('siteDescription', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* İletişim Bilgileri */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>İletişim Bilgileri</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Telefon</Label>
                    <Input
                      id="contactPhone"
                      value={settings.contactPhone}
                      onChange={(e) => updateSetting('contactPhone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail2">E-posta</Label>
                    <Input
                      id="contactEmail2"
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => updateSetting('contactEmail', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactAddress">Adres</Label>
                  <Textarea
                    id="contactAddress"
                    value={settings.contactAddress}
                    onChange={(e) => updateSetting('contactAddress', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sosyal Medya */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Sosyal Medya Hesapları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      value={settings.socialMedia.facebook}
                      onChange={(e) => updateSetting('socialMedia.facebook', e.target.value)}
                      placeholder="https://facebook.com/sardatekstil"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      value={settings.socialMedia.instagram}
                      onChange={(e) => updateSetting('socialMedia.instagram', e.target.value)}
                      placeholder="https://instagram.com/sardatekstil"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={settings.socialMedia.linkedin}
                      onChange={(e) => updateSetting('socialMedia.linkedin', e.target.value)}
                      placeholder="https://linkedin.com/company/sardatekstil"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={settings.socialMedia.twitter}
                      onChange={(e) => updateSetting('socialMedia.twitter', e.target.value)}
                      placeholder="https://twitter.com/sardatekstil"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Ayarları */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>SEO Ayarları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Başlık</Label>
                  <Input
                    id="metaTitle"
                    value={settings.seo.metaTitle}
                    onChange={(e) => updateSetting('seo.metaTitle', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Açıklama</Label>
                  <Textarea
                    id="metaDescription"
                    value={settings.seo.metaDescription}
                    onChange={(e) => updateSetting('seo.metaDescription', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="keywords">Anahtar Kelimeler</Label>
                  <Input
                    id="keywords"
                    value={settings.seo.keywords}
                    onChange={(e) => updateSetting('seo.keywords', e.target.value)}
                    placeholder="kilim, bukle, tekstil (virgülle ayırın)"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Özellik Ayarları */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Özellik Ayarları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Fiyat Gösterimi</Label>
                      <p className="text-sm text-gray-600">Ürün kartlarında fiyat bilgisi gösterilsin mi?</p>
                    </div>
                    <Switch
                      checked={settings.features.showPrices}
                      onCheckedChange={(checked) => updateSetting('features.showPrices', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Katalog İndirme</Label>
                      <p className="text-sm text-gray-600">Katalog indirme butonu aktif olsun mu?</p>
                    </div>
                    <Switch
                      checked={settings.features.enableCatalogDownload}
                      onCheckedChange={(checked) => updateSetting('features.enableCatalogDownload', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>İletişim Formu</Label>
                      <p className="text-sm text-gray-600">İletişim sayfasında form gösterilsin mi?</p>
                    </div>
                    <Switch
                      checked={settings.features.showContactForm}
                      onCheckedChange={(checked) => updateSetting('features.showContactForm', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Haber Bülteni</Label>
                      <p className="text-sm text-gray-600">Haber bülteni kayıt formu aktif olsun mu?</p>
                    </div>
                    <Switch
                      checked={settings.features.enableNewsletter}
                      onCheckedChange={(checked) => updateSetting('features.enableNewsletter', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <Button onClick={handleSave} size="lg">
              <Save className="mr-2 h-4 w-4" />
              Tüm Ayarları Kaydet
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
