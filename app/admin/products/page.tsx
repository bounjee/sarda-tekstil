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
  category: string
  image: string
  description: string
  features: string[]
  colors: string[]
  sizes: string[]
  specifications: Record<string, string>
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem('sarda-products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Default products
      const defaultProducts = [
        {
          id: 1,
          name: "Klasik Kilim Koleksiyonu",
          category: "Kilim",
          image: "/placeholder-9jf2k.png",
          description: "Geleneksel Anadolu motifleri ile modern tasarımın buluştuğu özel koleksiyon",
          features: ["100% Doğal Yün", "El Dokuma Tekniği", "Geleneksel Motifler"],
          colors: ["Kırmızı", "Mavi", "Bej"],
          sizes: ["120x180 cm", "160x230 cm"],
          specifications: { "Malzeme": "100% Yün", "Köken": "Gaziantep" }
        },
        {
          id: 2,
          name: "Modern Bukle Serisi",
          category: "Bukle",
          image: "/neutral-boucle-fabric.png",
          description: "Çağdaş yaşam alanları için tasarlanmış premium bukle kumaşlar",
          features: ["Premium Kalite", "Yumuşak Dokunuş", "Modern Tasarım"],
          colors: ["Krem", "Gri", "Bej"],
          sizes: ["140 cm genişlik"],
          specifications: { "Malzeme": "Polyester", "Köken": "Gaziantep" }
        }
      ]
      setProducts(defaultProducts)
      localStorage.setItem('sarda-products', JSON.stringify(defaultProducts))
    }
  }, [])

  const deleteProduct = (id: number) => {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      const updatedProducts = products.filter(product => product.id !== id)
      setProducts(updatedProducts)
      localStorage.setItem('sarda-products', JSON.stringify(updatedProducts))
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
              <Button className="bg-black hover:bg-gray-800 text-white">
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

        {products.length === 0 ? (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Package className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Henüz ürün yok</h3>
              <p className="text-gray-600 mb-6">İlk ürününüzü ekleyerek başlayın</p>
              <Link href="/admin/products/add">
                <Button className="bg-black hover:bg-gray-800 text-white">
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
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {product.category}
                      </Badge>
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
