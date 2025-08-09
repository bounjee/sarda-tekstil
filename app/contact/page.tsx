'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    details: [
      "Gaziantep Organize Sanayi Bölgesi",
      "1. Cadde No: 25",
      "27000 Şehitkamil / Gaziantep"
    ]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: [
      "+90 342 123 45 67",
      "+90 342 123 45 68",
      "Fax: +90 342 123 45 69"
    ]
  },
  {
    icon: Mail,
    title: "E-posta",
    details: [
      "info@sardatekstil.com",
      "satis@sardatekstil.com",
      "export@sardatekstil.com"
    ]
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: [
      "Pazartesi - Cuma: 08:00 - 18:00",
      "Cumartesi: 08:00 - 16:00",
      "Pazar: Kapalı"
    ]
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
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
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-black">Sarda Tekstil</span>
            </Link>
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-semibold">
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-semibold">
                Ürünler
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-semibold">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-black font-bold">
                İletişim
              </Link>
            </nav>
            <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
              <Button>
                Whatsapp İletişim
              </Button>
            </a>
          </div>
        </div>
      </header>

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
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
                <Label htmlFor="email">E-posta *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-black"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
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
              Mesaj Gönder
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
              <span className="text-gray-700">+90 342 123 45 67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-black" />
              <span className="text-gray-700">info@sardatekstil.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-black" />
              <span className="text-gray-700">Pazartesi - Cuma: 08:00 - 18:00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Map & Additional Info */}
    <div className="space-y-8">
      {/* Map - Embedded (Gaziantep random placeholder) */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <iframe
              title="Sarda Tekstil Konum"
              src="https://www.google.com/maps?q=Gaziantep%2C%20Turkey&hl=tr&z=13&output=embed"
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
                <h4 className="font-medium text-black">25+ Yıllık Deneyim</h4>
                <p className="text-gray-600 text-sm">Sektördeki uzun deneyimimizle güvenilir çözümler sunuyoruz.</p>
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Sarda Tekstil</span>
              </div>
              <p className="text-gray-400">
                Geleneksel sanatın modern yorumu ile kaliteli tekstil ürünleri üretiyoruz.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Ürünler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">Kilim Koleksiyonu</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Bukle Serisi</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Özel Tasarım</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Kurumsal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link href="/quality-policy" className="hover:text-white transition-colors">Kalite Politikası</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors">Sürdürülebilirlik</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gaziantep, Türkiye</li>
                <li>+90 342 123 45 67</li>
                <li>info@sardatekstil.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sarda Tekstil. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
