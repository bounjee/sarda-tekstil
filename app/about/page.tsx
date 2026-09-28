'use client'

import Link from "next/link"
import { ArrowLeft, Award, Users, Globe, Target, Heart, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

const values = [
  {
    icon: Award,
    title: "Kalite",
    description: "En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini ön planda tutuyoruz."
  },
  {
    icon: Heart,
    title: "Geleneksel Sanat",
    description: "Anadolu'nun köklü tekstil geleneğini koruyarak gelecek nesillere aktarıyoruz."
  },
  {
    icon: Zap,
    title: "İnovasyon",
    description: "Modern teknoloji ve geleneksel sanatı harmanlayarak yenilikçi ürünler üretiyoruz."
  },
  {
    icon: Globe,
    title: "Global Vizyon",
    description: "Türk tekstil sanatını dünya çapında tanıtmak için çalışıyoruz."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-black">Hakkımızda</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Gelenekten Geleceğe
                <span className="block text-gray-600">Sarda Tekstil</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gaziantep'te faaliyet gösteren Sarda Tekstil, geleneksel el 
                sanatlarını modern üretim teknikleriyle harmanlayarak kilim ve 
                bukle üretimi yapmaktadır. Kalite, güven ve müşteri memnuniyeti 
                odaklı yaklaşımımızla deneyimimizi sizlerin hizmetine sunuyoruz.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <Dialog>
              <DialogTrigger asChild>
                <button aria-label="Videoyu büyüt" className="group block w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-black/5">
                    <video
                      src="/tv8_5.mp4"
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                      className="w-full h-full object-cover object-left group-hover:opacity-95 transition-opacity"
                      poster="/tv8_5-poster.jpg"
                      preload="none"
                    />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black">
                <DialogTitle className="sr-only">Video Önizleme</DialogTitle>
                <video
                  src="/tv8_5.mp4"
                  muted
                  controls
                  className="w-full h-full"
                  poster="/tv8_5-poster.jpg"
                  preload="none"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Değerlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sarda Tekstil olarak bizi yönlendiren temel değerler ve ilkeler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Misyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Geleneksel Türk tekstil sanatını modern teknoloji ile buluşturarak, 
                  yüksek kaliteli kilim ve bukle ürünleri üretmek. Müşterilerimizin 
                  yaşam alanlarına değer katarken, kültürel mirasımızı korumak ve 
                  gelecek nesillere aktarmak.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Türk tekstil sanatını dünya çapında tanınan bir marka haline getirmek. 
                  Sürdürülebilir üretim anlayışı ile çevre dostu yaklaşımımızı koruyarak, 
                  global pazarda tanınırlığımızı artırmak ve sektörde referans 
                  olmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-lg text-gray-600">
              Deneyimimiz ve kalite anlayışımızla projelerinizde yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  İletişime Geç
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="px-8">
                  Ürünleri İncele
                </Button>
              </Link>
            </div>
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
