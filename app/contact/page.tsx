'use client'

import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Clock, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildWhatsAppLink } from '@/lib/constants'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    details: [
      "Ünaldı, Mıhcı Zekeriya Sk. No:31",
      "27100 Şahinbey / Gaziantep"
    ]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: [
      "0534 865 40 72",
      "WhatsApp: 0534 865 40 72"
    ]
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: [
      "24 saat açık"
    ]
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const header = [
      `Ad Soyad: ${formData.name}`,
      formData.phone ? `Telefon: ${formData.phone}` : '',
      formData.company ? `Şirket: ${formData.company}` : '',
      `Konu: ${formData.subject}`,
    ].filter(Boolean).join('\n')
    window.open(buildWhatsAppLink(`${header}\n\n${formData.message}`), '_blank', 'noopener,noreferrer')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-black">İletişim</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">İletişime Geçin</h1>
          <p className="text-lg text-gray-600">
            Ürünlerimiz hakkında detaylı bilgi almak, özel siparişleriniz için 
            fiyat teklifi almak veya herhangi bir konuda bizimle iletişime geçmek 
            için aşağıdaki bilgileri kullanabilirsiniz.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 pb-20">
  <div className="grid lg:grid-cols-2 gap-16">
    {/* Contact Form */}
    <div className="space-y-8">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">Mesaj Gönderin</CardTitle>
          <p className="text-gray-600">
            Formu doldurduğunuzda mesajınız WhatsApp üzerinden bize iletilmek üzere hazırlanır.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-black"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Şirket</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border-gray-300 focus:border-black"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Konu *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-black"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mesaj *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="border-gray-300 focus:border-black resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              WhatsApp ile Gönder
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Quick Contact Info */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Hızlı İletişim</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-black" />
              <a href="tel:+905348654072" className="text-gray-700 hover:text-black">0534 865 40 72</a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-black" />
              <span className="text-gray-700">Ünaldı, Mıhcı Zekeriya Sk. No:31, 27100 Şahinbey/Gaziantep</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-black" />
              <span className="text-gray-700">24 saat açık</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Map & Additional Info */}
    <div className="space-y-8">
      {/* Map - Embedded */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <iframe
              title="Sarda Tekstil Konum"
              src="https://www.google.com/maps?q=%C3%9Cnald%C4%B1%2C%20M%C4%B1hc%C4%B1%20Zekeriya%20Sk.%20No%3A31%2C%2027100%2C%2027000%20%C5%9Eahinbey%2FGaziantep&hl=tr&z=16&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-black">Neden Sarda Tekstil?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-black">Yerel Üretim</h4>
                <p className="text-gray-600 text-sm">Ürünlerimizi Gaziantep'te kendi üretimimizle hazırlıyoruz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-black">Kalite Garantisi</h4>
                <p className="text-gray-600 text-sm">Tüm ürünlerimizde yüksek kalite standartlarını koruyoruz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-black">Hızlı Teslimat</h4>
                <p className="text-gray-600 text-sm">Siparişlerinizi zamanında ve güvenli şekilde teslim ediyoruz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-black">Özel Tasarım</h4>
                <p className="text-gray-600 text-sm">İhtiyaçlarınıza özel tasarım ve üretim hizmetleri sunuyoruz.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
