'use client'

import Link from "next/link"
import { useState, useEffect, use } from "react"
import { ArrowLeft, Plus, X, Save } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: number
  name: string
  image: string
  sizes: string[]
}

export default function EditProduct({ params }: { params: Promise<{ id: string }> }) {
  const [formData, setFormData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)

  const resolvedParams = use(params)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/products/${resolvedParams.id}`, { cache: 'no-store' })
        if (!res.ok) throw new Error('not found')
        const product: Product = await res.json()
        setFormData(product)
      } catch (e) {
        setFormData(null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [resolvedParams.id])

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">Yükleniyor...</div>
    </div>
  }

  if (!formData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Ürün bulunamadı</h2>
        <Link href="/admin/products">
          <Button>Ürün Listesine Dön</Button>
        </Link>
      </div>
    </div>
  }

  // removed features/colors per new simplified model

  // sizes are global; not editable per product anymore

  // specifications removed

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !formData) return
    setUploading(true)
    const body = new FormData()
    body.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body })
    if (!res.ok) {
      alert('Dosya yüklenemedi')
      setUploading(false)
      return
    }
    const json = await res.json()
    setFormData(prev => prev ? ({ ...prev, image: json.url }) : null)
    setUploading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    const payload = {
      name: formData.name,
      image: formData.image,
      sizes: formData.sizes.filter(s => s.trim() !== ''),
    }

    const res = await fetch(`/api/products/${formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      alert('Güncelleme başarısız oldu')
      return
    }
    alert('Ürün başarıyla güncellendi!')
    window.location.href = '/admin/products'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/admin/products" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Ürün Yönetimi</span>
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-lg font-medium text-gray-700">Ürün Düzenle</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Ürün Düzenle</h1>
            <p className="text-gray-600 mt-2">{formData.name} ürününü düzenleyin</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Temel Bilgiler */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Temel Bilgiler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ürün Adı *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => prev ? ({ ...prev, name: e.target.value }) : null)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Görsel</Label>
                    <div className="flex items-center gap-3">
                      <Input id="image" value={formData.image} onChange={(e) => setFormData(prev => prev ? ({ ...prev, image: e.target.value }) : null)} placeholder="/placeholder.svg" />
                      <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    {uploading && <p className="text-sm text-gray-500">Yükleniyor...</p>}
                    {formData.image && <p className="text-sm text-gray-600">Seçili: {formData.image}</p>}
                  </div>
                </CardContent>
              </Card>

              {/* Boyutlar global yönetiliyor */}
            </div>

            {/* Teknik Özellikler kaldırıldı */}

            {/* Submit */}
            <div className="flex justify-end space-x-4 mt-8">
              <Link href="/admin/products">
                <Button type="button" variant="outline">
                  İptal
                </Button>
              </Link>
                <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                Değişiklikleri Kaydet
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
