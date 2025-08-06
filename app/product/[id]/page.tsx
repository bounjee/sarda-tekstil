'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, use } from "react"
import { ArrowLeft, Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PriceQuoteModal } from "@/components/price-quote-modal"
import { ShareModal } from "@/components/share-modal"

const products = {
  1: {
    id: 1,
    name: "Klasik Kilim Koleksiyonu",
    category: "Kilim",
    price: "₺2,500 - ₺8,000",
    rating: 4.8,
    reviews: 24,
    images: [
      "/placeholder-j5i2h.png",
      "/turkish-kilim-detail.png",
      "/turkish-kilim-living-room.png",
      "/turkish-kilim-detail.png"
    ],
    description: "Geleneksel Anadolu motifleri ile modern tasarımın buluştuğu özel koleksiyon. Her bir kilim, ustalarımız tarafından özenle dokunarak üretilmektedir.",
    features: [
      "100% Doğal Yün",
      "El Dokuma Tekniği",
      "Geleneksel Motifler",
      "Dayanıklı Yapı",
      "Renk Haslığı Garantili"
    ],
    specifications: {
      "Malzeme": "100% Yün",
      "Teknik": "El Dokuma",
      "Köken": "Gaziantep, Türkiye",
      "Boyutlar": "120x180 cm, 160x230 cm, 200x300 cm",
      "Kalınlık": "8-12 mm",
      "Ağırlık": "2.5-4.5 kg/m²"
    },
    colors: ["Kırmızı", "Mavi", "Bej", "Antrasit"],
    sizes: ["120x180 cm", "160x230 cm", "200x300 cm"]
  },
  2: {
    id: 2,
    name: "Modern Bukle Serisi",
    category: "Bukle",
    price: "₺1,800 - ₺5,500",
    rating: 4.9,
    reviews: 18,
    images: [
      "/neutral-boucle-fabric.png",
      "/premium-boucle-fabric.png",
      "/neutral-boucle-fabric.png",
      "/premium-boucle-fabric.png"
    ],
    description: "Çağdaş yaşam alanları için tasarlanmış premium bukle kumaşlar. Yumuşak dokusu ve modern görünümü ile mekanlarınıza şıklık katar.",
    features: [
      "Premium Kalite Elyaf",
      "Yumuşak Dokunuş",
      "Modern Tasarım",
      "Kolay Bakım",
      "Renk Çeşitliliği"
    ],
    specifications: {
      "Malzeme": "Polyester & Akrilik Karışımı",
      "Teknik": "Bukle Dokuma",
      "Köken": "Gaziantep, Türkiye",
      "Genişlik": "140 cm",
      "Ağırlık": "450 gr/m²",
      "Kullanım": "Mobilya Döşemelik"
    },
    colors: ["Krem", "Gri", "Bej", "Kahverengi"],
    sizes: ["140 cm genişlik", "Metraj satış"]
  }
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [showPriceModal, setShowPriceModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  
  const resolvedParams = use(params)
  const productId = parseInt(resolvedParams.id)
  const product = products[productId as keyof typeof products]
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Ürün Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/products">
            <Button className="bg-black hover:bg-gray-800 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ürünler</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-3xl lg:text-4xl font-bold text-black">{product.name}</h1>
              
              
              
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Özellikler</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Renk Seçenekleri</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <div key={index} className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-black transition-colors cursor-pointer">
                    {color}
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Boyut Seçenekleri</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <div key={index} className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-black transition-colors cursor-pointer">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white flex-1"
                  onClick={() => setShowPriceModal(true)}
                >
                  Fiyat Teklifi Al
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white"
                  onClick={() => setShowShareModal(true)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Paylaş
                </Button>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Teknik Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                    <span className="font-bold text-black">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link href="/products" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>

      {/* Modals */}
      <PriceQuoteModal
        isOpen={showPriceModal}
        onClose={() => setShowPriceModal(false)}
        productName={product.name}
        productId={product.id}
      />
      
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        productName={product.name}
        productUrl={currentUrl}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
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
