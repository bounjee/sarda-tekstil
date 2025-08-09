'use client'

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { Search, Filter, Grid, List, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { LoadingCard, LoadingSpinner } from "@/components/loading-spinner"
import { ErrorBoundary } from "@/components/error-boundary"

interface ListProduct {
  id: number
  name: string
  image: string
}

const defaultProducts: ListProduct[] = []

function ProductsContent() {
  const [products, setProducts] = useState<ListProduct[]>(defaultProducts)
  const [filteredProducts, setFilteredProducts] = useState<ListProduct[]>(defaultProducts)
  const [searchTerm, setSearchTerm] = useState('')
  // Kategori kaldırıldı
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/products', { cache: 'no-store' })
        if (res.ok) {
          const apiProducts = await res.json()
          setProducts(apiProducts)
          setFilteredProducts(apiProducts)
        } else {
          setProducts(defaultProducts)
          setFilteredProducts(defaultProducts)
        }
      } catch {
        setProducts(defaultProducts)
        setFilteredProducts(defaultProducts)
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm])

  // Kategori listesi kaldırıldı

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Skeleton */}
        <div className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-sm animate-pulse"></div>
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-24 h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
            <div className="w-96 h-12 bg-gray-200 rounded animate-pulse mx-auto"></div>
            <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        </div>
      </div>
    )
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
              <Link href="/products" className="text-black font-bold">
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-black">Ürünler</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">Ürün Koleksiyonumuz</h1>
          <p className="text-lg text-gray-600">
            Geleneksel sanatın modern yorumu ile ürettiğimiz kaliteli tekstil ürünlerini keşfedin. 
            Her bir ürün, ustalarımızın deneyimi ve modern teknolojinin birleşimiyle sizlere sunuluyor.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 focus:border-black"
            />
          </div>

          {/* Category Filter kaldırıldı */}

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <Button
              variant={viewMode === 'grid' ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={`rounded-none ${viewMode === 'grid' ? '' : ''}`}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode('list')}
              className={`rounded-none ${viewMode === 'list' ? '' : ''}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ürün bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {filteredProducts.map((product) => (
              <Card key={product.id} className={`group border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col ${
                viewMode === 'list' ? 'flex-row' : ''
              }`}>
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-[4/3]'
                }`}>
                  <ImageWithFallback
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className={`p-6 space-y-4 flex-1 flex flex-col ${
                  viewMode === 'list' ? 'justify-center' : ''
                }`}>
                  <div className="space-y-2 flex-1">
                    {/* Kategori rozeti kaldırıldı */}
                    <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                    {/* açıklama kaldırıldı */}
                    {/* Fiyat etiketleri kaldırıldı */}
                  </div>
                  
                  <div className="pt-4 mt-auto">
                    <Link href={`/product/${product.id}`}>
                      <Button className="w-full transition-colors">
                        Detaylar
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
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

export default function ProductsPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <ProductsContent />
      </Suspense>
    </ErrorBoundary>
  )
}
