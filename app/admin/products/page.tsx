'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, ArrowLeft, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  image: string
  description: string
  features: string[]
  colors: string[]
  sizes: string[]
  specifications: Record<string, string>
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' })
        if (!res.ok) throw new Error('failed')
        const data: Product[] = await res.json()
        setProducts(data)
      } catch {
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const deleteProduct = async (id: number) => {
    if (!confirm('Bu ürünü silmek istediğinizden emin misiniz?')) return
    const prev = products
    setProducts(prev.filter(p => p.id !== id))
    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      setProducts(prev)
      alert('Silme işlemi başarısız oldu')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Admin Panel</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">Ürün Yönetimi</span>
            </div>
              <Link href="/admin/products/add">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Yeni Ürün
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Ürün Yönetimi</h1>
          <p className="text-gray-600 mt-2">Tüm ürünlerinizi buradan yönetebilirsiniz</p>
        </div>

        {loading ? (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Package className="h-16 w-16 mx-auto animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Yükleniyor...</h3>
              <p className="text-gray-600 mb-6">Lütfen bekleyin</p>
            </CardContent>
          </Card>
        ) : products.length === 0 ? (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Package className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Henüz ürün yok</h3>
              <p className="text-gray-600 mb-6">İlk ürününüzü ekleyerek başlayın</p>
              <Link href="/admin/products/add">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  İlk Ürünü Ekle
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/admin/products/edit/${product.id}`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full border-gray-300">
                          <Edit className="mr-2 h-4 w-4" />
                          Düzenle
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-red-300 text-red-600 hover:bg-red-50"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
