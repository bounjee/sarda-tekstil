'use client'

import Link from "next/link"
import { ArrowLeft, Shield, Award, CheckCircle, Target, Users, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"

const qualityPrinciples = [
  {
    icon: Shield,
    title: "Kalite Güvencesi",
    description: "Tüm üretim süreçlerimizde yüksek kalite standartlarını uyguluyoruz."
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

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

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
            için sürekli gelişim ve mükemmellik anlayışını benimser, yüksek standartlarda 
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
                   <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
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
                  Tekstil üretiminde kaliteyi her aşamada önceliğimiz olarak görüyor, 
                  ürünlerimizi bu anlayışla hazırlıyoruz.
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-black/5">
                <video
                  src="/tv8_5.mp4"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-cover object-left"
                  poster="/tv8_5-poster.jpg"
                  preload="none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
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
