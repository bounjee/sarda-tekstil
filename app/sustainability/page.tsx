'use client'

import Link from "next/link"
import { ArrowLeft, Leaf, Recycle, Droplets, Sun, Heart, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"

const sustainabilityPrinciples = [
  {
    icon: Leaf,
    title: "Çevre Dostu Üretim",
    description: "Doğaya saygılı üretim süreçleri ile çevresel etkimizi minimize ediyoruz."
  },
  {
    icon: Recycle,
    title: "Geri Dönüşüm",
    description: "Atık yönetimi ve geri dönüşüm programları ile sürdürülebilirliği destekliyoruz."
  },
  {
    icon: Droplets,
    title: "Su Tasarrufu",
    description: "Su kullanımını optimize ederek doğal kaynakları koruyoruz."
  },
  {
    icon: Sun,
    title: "Yenilenebilir Enerji",
    description: "Yenilenebilir enerji kaynaklarının kullanımını önemsiyoruz."
  },
  {
    icon: Heart,
    title: "Sosyal Sorumluluk",
    description: "Topluma ve çalışanlarımıza karşı sorumluluklarımızı yerine getiriyoruz."
  },
  {
    icon: Globe,
    title: "Küresel Etki",
    description: "Yerel ve küresel çevre hedeflerine katkıda bulunuyoruz."
  }
]

const initiatives = [
  {
    title: "Organik Hammadde Kullanımı",
    description: "Üretimde organik ve doğal hammaddeleri tercih ediyoruz."
  },
  {
    title: "Enerji Verimliliği",
    description: "Modern teknoloji ile enerji tüketimini azaltıyoruz."
  },
  {
    title: "Atık Azaltma",
    description: "Üretim sürecinde sıfır atık hedefine yönelik çalışıyoruz."
  },
  {
    title: "Yerel Tedarik",
    description: "Yerel tedarikçilerle çalışarak karbon ayak izini azaltıyoruz."
  }
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link>
          <span>/</span>
          <span className="text-black">Sürdürülebilirlik</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">Sürdürülebilirlik</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sarda Tekstil olarak, gelecek nesillere yaşanabilir bir dünya bırakmak için 
            çevre dostu üretim süreçleri benimser, sürdürülebilir kalkınma hedeflerine 
            katkıda bulunuruz.
          </p>
        </div>
      </section>

      {/* Sustainability Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Sürdürülebilirlik İlkelerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Çevre ve toplum için sorumlu üretim anlayışımızın temelleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityPrinciples.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
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

      {/* Our Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Sürdürülebilirlik Girişimlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Çevresel etkimizi azaltmak için hayata geçirdiğimiz projeler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-black">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">Çevreye Saygılı Üretim</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Üretim süreçlerimizde kaynakları verimli kullanmayı, atıkları azaltmayı 
                  ve çevresel etkimizi en aza indirmeyi hedefliyoruz.
                </p>
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
