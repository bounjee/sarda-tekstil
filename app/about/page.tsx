'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, Users, Globe, Target, Heart, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildWhatsAppLink } from '@/lib/constants'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { CountUp } from "@/components/count-up"

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

const milestones = [
  { year: "1998", title: "Kuruluş", description: "Sarda Tekstil, Gaziantep'te kuruldu" },
  { year: "2005", title: "İlk İhracat", description: "Avrupa pazarına ilk ihracatımızı gerçekleştirdik" },
  { year: "2012", title: "Kapasite Artışı", description: "Üretim kapasitemizi 3 katına çıkardık" },
  { year: "2018", title: "Teknoloji Yatırımı", description: "Modern dokuma makineleri ile donatıldık" },
  { year: "2024", title: "Sürdürülebilirlik", description: "Çevre dostu üretim süreçlerine geçiş" }
]

export default function AboutPage() {
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
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-semibold">
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-semibold">
                Ürünler
              </Link>
              <Link href="/about" className="text-black font-bold">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-semibold">
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
                1998 yılından bu yana Gaziantep'te faaliyet gösteren Sarda Tekstil, 
                geleneksel el sanatlarını modern üretim teknikleriyle harmanlayarak 
                sektörde öncü konumunu sürdürmektedir. Kalite, güven ve müşteri 
                memnuniyeti odaklı yaklaşımımızla 25 yılı aşkın deneyimimizi 
                sizlerin hizmetine sunuyoruz.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <CountUp 
                  end={25} 
                  duration={2000}
                  suffix="+"
                  className="text-3xl font-bold text-black"
                />
                <div className="text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <CountUp 
                  end={15} 
                  duration={2000}
                  suffix="+"
                  className="text-3xl font-bold text-black"
                />
                <div className="text-gray-600">İhracat Ülkesi</div>
              </div>
              <div className="text-center">
                <CountUp 
                  end={1000} 
                  duration={2500}
                  suffix="+"
                  className="text-3xl font-bold text-black"
                />
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
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
                      poster="/placeholder-yaa84.png"
                    />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black">
                <DialogTitle className="sr-only">Video Önizleme</DialogTitle>
                <video
                  src="/tv8_5.mp4"
                  autoPlay
                  muted
                  controls
                  className="w-full h-full"
                  poster="/placeholder-yaa84.png"
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

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Tarihçemiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              25 yılı aşkın sürede attığımız önemli adımlar
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-black">{milestone.year}</div>
                          <h3 className="text-lg font-semibold text-black">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
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
                  global pazarda öncü konumumuzu güçlendirmek ve sektörde referans 
                  olmaya devam etmek.
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
              25 yıllık deneyimimiz ve kalite anlayışımızla projelerinizde yanınızdayız.
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
