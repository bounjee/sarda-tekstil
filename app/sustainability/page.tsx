'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Recycle, Droplets, Sun, Heart, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildWhatsAppLink } from '@/lib/constants'
import { SiteFooter } from "@/components/SiteFooter"

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
    description: "Güneş enerjisi ve diğer yenilenebilir enerji kaynaklarını kullanıyoruz."
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
    description: "Üretimde organik ve doğal hammaddeleri tercih ediyoruz.",
    impact: "%40 daha az kimyasal kullanım"
  },
  {
    title: "Enerji Verimliliği",
    description: "Modern teknoloji ile enerji tüketimini azaltıyoruz.",
    impact: "%30 enerji tasarrufu"
  },
  {
    title: "Atık Azaltma",
    description: "Üretim sürecinde sıfır atık hedefine yönelik çalışıyoruz.",
    impact: "%50 atık azaltımı"
  },
  {
    title: "Yerel Tedarik",
    description: "Yerel tedarikçilerle çalışarak karbon ayak izini azaltıyoruz.",
    impact: "%25 karbon azaltımı"
  }
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Sarda Tekstil" width={32} height={32} className="h-8 w-8" />
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
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
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
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {initiative.impact}
                  </div>
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
                  poster="/placeholder-yaa84.png"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">Çevresel Etkimiz</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  2024 yılında gerçekleştirdiğimiz sürdürülebilirlik projelerimizin 
                  çevresel etki sonuçları.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.5 Ton</div>
                  <div className="text-sm text-gray-600">CO₂ Azaltımı</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15.000L</div>
                  <div className="text-sm text-gray-600">Su Tasarrufu</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">%40</div>
                  <div className="text-sm text-gray-600">Enerji Verimliliği</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">%60</div>
                  <div className="text-sm text-gray-600">Geri Dönüşüm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">2030 Hedeflerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sürdürülebilir gelecek için belirlediğimiz uzun vadeli hedefler
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">0</span>
                </div>
                <h3 className="text-xl font-semibold text-black">Sıfır Atık</h3>
                <p className="text-gray-600">2030 yılına kadar sıfır atık hedefine ulaşmak</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-black">Yenilenebilir Enerji</h3>
                <p className="text-gray-600">Tüm enerjimizi yenilenebilir kaynaklardan karşılamak</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">50%</span>
                </div>
                <h3 className="text-xl font-semibold text-black">Karbon Azaltımı</h3>
                <p className="text-gray-600">Karbon ayak izimizi %50 oranında azaltmak</p>
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
