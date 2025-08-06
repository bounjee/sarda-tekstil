'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Award, CheckCircle, Target, Users, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const qualityPrinciples = [
  {
    icon: Shield,
    title: "Kalite Güvencesi",
    description: "Tüm üretim süreçlerimizde uluslararası kalite standartlarını uyguluyoruz."
  },
  {
    icon: Award,
    title: "Sürekli İyileştirme",
    description: "Kalite yönetim sistemimizi sürekli geliştirerek mükemmelliği hedefliyoruz."
  },
  {
    icon: CheckCircle,
    title: "Müşteri Memnuniyeti",
    description: "Müşteri beklentilerini aşmak için kalite standartlarımızı yüksek tutuyoruz."
  },
  {
    icon: Target,
    title: "Hedef Odaklılık",
    description: "Belirlediğimiz kalite hedeflerine ulaşmak için sistematik yaklaşım sergiliyoruz."
  },
  {
    icon: Users,
    title: "Ekip Çalışması",
    description: "Tüm çalışanlarımız kalite bilinci ile hareket eder ve sürekli eğitim alır."
  },
  {
    icon: Zap,
    title: "İnovasyon",
    description: "Yenilikçi yaklaşımlarla kalite standartlarımızı sürekli yükseltiyoruz."
  }
]

const certifications = [
  { name: "ISO 9001:2015", description: "Kalite Yönetim Sistemi" },
  { name: "OEKO-TEX Standard 100", description: "Tekstil Güvenlik Standardı" },
  { name: "CE Uygunluk", description: "Avrupa Uygunluk Belgesi" },
  { name: "TSE Belgesi", description: "Türk Standartları Enstitüsü" }
]

export default function QualityPolicyPage() {
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
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Ürünler
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                İletişim
              </Link>
            </nav>
            <Button className="bg-black hover:bg-gray-800 text-white">
              Katalog İndir
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link>
          <span>/</span>
          <span className="text-black">Kalite Politikası</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">Kalite Politikamız</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sarda Tekstil olarak, müşterilerimize en yüksek kalitede ürün ve hizmet sunmak 
            için sürekli gelişim ve mükemmellik anlayışını benimser, uluslararası standartlarda 
            üretim yaparız.
          </p>
        </div>
      </section>

      {/* Quality Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Kalite İlkelerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kalite yönetim sistemimizin temelini oluşturan ilkeler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPrinciples.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">Kalite Taahhüdümüz</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  25 yılı aşkın deneyimimizle, tekstil sektöründe kalite standartlarını 
                  belirleyen öncü firmalardan biri olmaktan gurur duyuyoruz.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-black">Hammadde Kalitesi</h4>
                    <p className="text-gray-600">En kaliteli hammaddeleri seçerek üretim sürecimize başlıyoruz.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-black">Üretim Kontrolü</h4>
                    <p className="text-gray-600">Her üretim aşamasında titiz kalite kontrolleri uyguluyoruz.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-black">Son Ürün Testi</h4>
                    <p className="text-gray-600">Tüm ürünlerimiz sevkiyat öncesi kapsamlı testlerden geçer.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/kilim-weavers.png"
                  alt="Kalite Kontrol"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Sertifikalarımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kalite standartlarımızı belgeleyen uluslararası sertifikalar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-black">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
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
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Kilim Koleksiyonu</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Bukle Serisi</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Özel Tasarım</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Kurumsal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Hakkımızda</Link></li>
                <li><Link href="/quality-policy" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Kalite Politikası</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Sürdürülebilirlik</Link></li>
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
