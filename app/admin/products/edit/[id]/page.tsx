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
  category: string
  image: string
  description: string
  features: string[]
  colors: string[]
  sizes: string[]
  specifications: Record<string, string>
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

  const addFeature = () => {
    setFormData(prev => prev ? ({
      ...prev,
      features: [...prev.features, '']
    }) : null)
  }

  const removeFeature = (index: number) => {
    setFormData(prev => prev ? ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }) : null)
  }

  const updateFeature = (index: number, value: string) => {
    setFormData(prev => prev ? ({
      ...prev,
      features: prev.features.map((feature, i) => i === index ? value : feature)
    }) : null)
  }

  const addColor = () => {
    setFormData(prev => prev ? ({
      ...prev,
      colors: [...prev.colors, '']
    }) : null)
  }

  const removeColor = (index: number) => {
    setFormData(prev => prev ? ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }) : null)
  }

  const updateColor = (index: number, value: string) => {
    setFormData(prev => prev ? ({
      ...prev,
      colors: prev.colors.map((color, i) => i === index ? value : color)
    }) : null)
  }

  const addSize = () => {
    setFormData(prev => prev ? ({
      ...prev,
      sizes: [...prev.sizes, '']
    }) : null)
  }

  const removeSize = (index: number) => {
    setFormData(prev => prev ? ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index)
    }) : null)
  }

  const updateSize = (index: number, value: string) => {
    setFormData(prev => prev ? ({
      ...prev,
      sizes: prev.sizes.map((size, i) => i === index ? value : size)
    }) : null)
  }

  const updateSpecification = (key: string, value: string) => {
    setFormData(prev => prev ? ({
      ...prev,
      specifications: { ...prev.specifications, [key]: value }
    }) : null)
  }

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
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      colors: formData.colors.filter(c => c.trim() !== ''),
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
              {/* Basic Info */}
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
                    <Label htmlFor="category">Kategori *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => prev ? ({ ...prev, category: value }) : null)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Kategori seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Kilim">Kilim</SelectItem>
                        <SelectItem value="Bukle">Bukle</SelectItem>
                      </SelectContent>
                    </Select>
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

                  <div className="space-y-2">
                    <Label htmlFor="description">Açıklama *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => prev ? ({ ...prev, description: e.target.value }) : null)}
                      rows={4}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Özellikler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Ürün Özellikleri</Label>
                      <Button type="button" size="sm" variant="outline" onClick={addFeature}>
                        <Plus className="h-4 w-4 mr-1" />
                        Ekle
                      </Button>
                    </div>
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex space-x-2">
                        <Input
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          placeholder="Özellik girin"
                        />
                        {formData.features.length > 1 && (
                          <Button type="button" size="sm" variant="outline" onClick={() => removeFeature(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Renk Seçenekleri</Label>
                      <Button type="button" size="sm" variant="outline" onClick={addColor}>
                        <Plus className="h-4 w-4 mr-1" />
                        Ekle
                      </Button>
                    </div>
                    {formData.colors.map((color, index) => (
                      <div key={index} className="flex space-x-2">
                        <Input
                          value={color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          placeholder="Renk girin"
                        />
                        {formData.colors.length > 1 && (
                          <Button type="button" size="sm" variant="outline" onClick={() => removeColor(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Boyut Seçenekleri</Label>
                      <Button type="button" size="sm" variant="outline" onClick={addSize}>
                        <Plus className="h-4 w-4 mr-1" />
                        Ekle
                      </Button>
                    </div>
                    {formData.sizes.map((size, index) => (
                      <div key={index} className="flex space-x-2">
                        <Input
                          value={size}
                          onChange={(e) => updateSize(index, e.target.value)}
                          placeholder="Boyut girin"
                        />
                        {formData.sizes.length > 1 && (
                          <Button type="button" size="sm" variant="outline" onClick={() => removeSize(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <Card className="border-0 shadow-sm mt-8">
              <CardHeader>
                <CardTitle>Teknik Özellikler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="material">Malzeme</Label>
                    <Input
                      id="material"
                      value={formData.specifications.Malzeme || ''}
                      onChange={(e) => updateSpecification('Malzeme', e.target.value)}
                      placeholder="Örn: 100% Yün"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="origin">Köken</Label>
                    <Input
                      id="origin"
                      value={formData.specifications.Köken || ''}
                      onChange={(e) => updateSpecification('Köken', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex justify-end space-x-4 mt-8">
              <Link href="/admin/products">
                <Button type="button" variant="outline">
                  İptal
                </Button>
              </Link>
              <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
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
