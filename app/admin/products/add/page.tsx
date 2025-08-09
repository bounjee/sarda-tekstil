'use client'

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  })
  const [uploading, setUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
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
    setFormData(prev => ({ ...prev, image: json.url }))
    setUploading(false)
  }

  // removed features/colors per new simplified model

  // sizes no longer editable per product; global list is used

  // specifications removed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      name: formData.name,
      image: formData.image,
    }

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      alert('Ürün eklenemedi')
      return
    }

    alert('Ürün başarıyla eklendi!')
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
            <span className="text-lg font-medium text-gray-700">Yeni Ürün Ekle</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Yeni Ürün Ekle</h1>
            <p className="text-gray-600 mt-2">Sisteme yeni bir ürün ekleyin</p>
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
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Kategori alanı kaldırıldı */}

                  <div className="space-y-2">
                    <Label htmlFor="image">Görsel</Label>
                    <div className="flex items-center gap-3">
                      <Input id="image" value={formData.image} onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))} placeholder="/placeholder.svg" />
                      <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    {uploading && <p className="text-sm text-gray-500">Yükleniyor...</p>}
                    {formData.image && <p className="text-sm text-gray-600">Seçili: {formData.image}</p>}
                  </div>

                  {/* Açıklama kaldırıldı */}
                </CardContent>
              </Card>

              {/* Boyutlar global olarak yönetiliyor */}
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
                Ürünü Kaydet
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
