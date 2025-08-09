'use client'

import { useState } from 'react'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useToast } from "@/hooks/use-toast"

interface PriceQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productId: number
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  quantity: string
  size: string
  color: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function PriceQuoteModal({ isOpen, onClose, productName, productId }: PriceQuoteModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    size: '',
    color: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }

    // Phone validation
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz'
    }

    // Quantity validation
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Miktar gereklidir'
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      newErrors.quantity = 'Geçerli bir miktar giriniz'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, '').trim().substring(0, 500)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    const sanitizedValue = sanitizeInput(value)
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Form Hatası",
        description: "Lütfen tüm gerekli alanları doğru şekilde doldurun.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Save to localStorage for demo purposes
      const quote = {
        id: Date.now(),
        productId,
        productName,
        ...formData,
        createdAt: new Date().toISOString()
      }
      
      const existingQuotes = JSON.parse(localStorage.getItem('price-quotes') || '[]')
      localStorage.setItem('price-quotes', JSON.stringify([...existingQuotes, quote]))
      
      setIsSuccess(true)
      toast({
        title: "Başarılı!",
        description: "Fiyat teklifi talebiniz alındı. En kısa sürede size dönüş yapacağız.",
      })
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          quantity: '',
          size: '',
          color: '',
          message: ''
        })
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting quote:', error)
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold">
            {isSuccess ? 'Talebiniz Alındı!' : 'Fiyat Teklifi Al'}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h3 className="text-xl font-semibold text-green-700">Talebiniz Başarıyla Alındı!</h3>
              <p className="text-gray-600">
                <strong>{productName}</strong> için fiyat teklifi talebiniz alındı. 
                En kısa sürede size dönüş yapacağız.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  📧 E-posta adresinize onay mesajı gönderildi.<br />
                  📞 24 saat içinde size ulaşacağız.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Ürün: {productName}</h3>
                <p className="text-sm text-gray-600">Bu ürün için fiyat teklifi almak üzeresiniz.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={errors.name ? 'border-red-500' : ''}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                      maxLength={100}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="0555 123 45 67"
                      className={errors.phone ? 'border-red-500' : ''}
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Miktar *</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="Adet/Metre"
                      className={errors.quantity ? 'border-red-500' : ''}
                      maxLength={10}
                    />
                    {errors.quantity && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.quantity}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size">Boyut</Label>
                    <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Boyut seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="120x180">120x180 cm</SelectItem>
                        <SelectItem value="160x230">160x230 cm</SelectItem>
                        <SelectItem value="200x300">200x300 cm</SelectItem>
                        <SelectItem value="custom">Özel Boyut</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color">Renk</Label>
                    <Select value={formData.color} onValueChange={(value) => handleInputChange('color', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Renk seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kirmizi">Kırmızı</SelectItem>
                        <SelectItem value="mavi">Mavi</SelectItem>
                        <SelectItem value="bej">Bej</SelectItem>
                        <SelectItem value="antrasit">Antrasit</SelectItem>
                        <SelectItem value="other">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ek Notlar</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Özel istekleriniz, sorularınız..."
                    rows={3}
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500">
                    {formData.message.length}/500 karakter
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    İptal
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Teklif Al
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
