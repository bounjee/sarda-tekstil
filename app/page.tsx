'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Globe, Users, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountUp } from "@/components/count-up"

 type HomeProduct = { id: number; name: string; image: string; description: string }
import { useEffect, useState } from 'react'
const productsInitial: HomeProduct[] = []

const stats = [
  { 
    icon: Award, 
    label: "Yıllık Deneyim", 
    value: 25,
    suffix: "+"
  },
  { 
    icon: Globe, 
    label: "İhracat Ülkesi", 
    value: 15,
    suffix: "+"
  },
  { 
    icon: Users, 
    label: "Mutlu Müşteri", 
    value: 1000,
    suffix: "+"
  },
  { 
    icon: TrendingUp, 
    label: "Kalite Standardı", 
    value: 100,
    prefix: "%"
  }
]

export default function HomePage() {
  const [latest, setLatest] = useState<HomeProduct[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' })
        if (res.ok) {
          const data = await res.json()
          // en son eklenen ilk sırada olacak şekilde
          const sorted = [...data].sort((a: any, b: any) => b.id - a.id)
          setLatest(sorted.slice(0, 8))
        }
      } catch {}
    }
    load()
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-black">Sarda Tekstil</span>
            </div>
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
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-semibold">
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/hero_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder-yaa84.png"
          />
<div className="absolute inset-0 bg-gradient-to-b from-[#000000B3] via-[#00000099] to-[#000000B3]"></div>
</div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Geleneksel Sanatın
              <span className="block text-gray-200">Modern Yorumu</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
              Gaziantep'in köklü tekstil geleneğini modern tasarım anlayışıyla buluşturarak, 
              kilim ve bukle üretiminde öncü olmaya devam ediyoruz.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Link href="/products" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="group px-8 py-4 text-lg">
                Ürünleri Keşfet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="px-8 py-4 text-lg">
                İletişime Geç
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - With Counter Animation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                   <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <CountUp 
                    end={stat.value} 
                    duration={2500}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    className="text-3xl font-bold text-black"
                  />
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Ürün Koleksiyonlarımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yüksek kalite standartlarında üretilen kilim ve bukle ürünlerimizle 
              yaşam alanlarınıza değer katın.
            </p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-2">
            {latest.map((product, index) => (
              <Link key={product.id} href={`/product/${product.id}`} onClick={() => window.scrollTo(0, 0)} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0">
                <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-white h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    </div>
                    <div className="w-full pt-2">
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `/product/${product.id}`;
                          window.scrollTo(0, 0);
                        }}
                      >
                        Detaylar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
                <li><Link href="#" className="hover:text-white transition-colors">Kilim Koleksiyonu</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Bukle Serisi</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Özel Tasarım</Link></li>
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
