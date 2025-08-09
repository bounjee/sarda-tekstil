'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, use } from "react"
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { STANDARD_SIZES, buildWhatsAppLink } from '@/lib/constants'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
// removed modal usage per new UX

interface ProductDetails {
  id: number
  name: string
  images: string[]
  sizes: string[]
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  // modals removed
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState(true)

  const resolvedParams = use(params)
  const productId = parseInt(resolvedParams.id)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/products/${productId}`, { cache: 'no-store' })
        if (res.ok) {
          const p = await res.json()
          const transformed: ProductDetails = {
            id: p.id,
            name: p.name,
            images: [p.image || '/placeholder.svg'],
            sizes: Array.isArray(p.sizes) ? p.sizes : [],
          }
          setProduct(transformed)
          setSelectedSize(STANDARD_SIZES[0] || null)
        } else {
          setProduct(null)
        }
      } catch {
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [productId])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Yükleniyor...</h1>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Ürün Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const whatsappHref = (size?: string) => buildWhatsAppLink(`Merhaba, ${product?.name} ürünü için fiyat teklifi almak istiyorum${size ? ` (Boyut: ${size})` : ''}.`)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
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
            <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
              <Button>
                Whatsapp İletişim
              </Button>
            </a>
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

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Image gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
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

          {/* Right: Info + sizes + CTA */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="space-y-6 rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                  {product.name}
                </h1>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black text-center lg:text-left">Boyut Seçenekleri</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {STANDARD_SIZES.map((size) => {
                      const isActive = selectedSize === size
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          aria-pressed={isActive}
                          className={`px-5 py-3 rounded-lg border font-medium transition-colors ${
                            isActive
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'border-primary text-primary hover:bg-[hsl(var(--primary-hover))] hover:text-primary-foreground'
                          }`}
                        >
                          {size}
                        </button>
                      )
                    })}
                  </div>
                  {selectedSize && (
                    <div className="text-sm text-gray-600 text-center lg:text-left">
                      Seçilen boyut: <span className="font-semibold text-black">{selectedSize}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <a href={whatsappHref(selectedSize || undefined)} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full justify-center">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Fiyat Teklifi Al (WhatsApp)
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* specs removed per new UX */}

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link href="/products" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>

      {/* modals removed */}

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
