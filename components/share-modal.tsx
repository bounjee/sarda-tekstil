'use client'

import { useState } from 'react'
import { X, Share2, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productUrl: string
}

export function ShareModal({ isOpen, onClose, productName, productUrl }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const shareText = `${productName} - Sarda Tekstil'den kaliteli tekstil ürünleri`

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: shareText,
          url: productUrl,
        })
        toast({
          title: "Başarılı!",
          description: "Ürün başarıyla paylaşıldı.",
        })
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error)
          toast({
            title: "Hata",
            description: "Paylaşım sırasında bir hata oluştu.",
            variant: "destructive",
          })
        }
      }
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(productUrl)
      setCopied(true)
      toast({
        title: "Kopyalandı!",
        description: "Link panoya kopyalandı.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error copying to clipboard:', error)
      toast({
        title: "Hata",
        description: "Link kopyalanırken bir hata oluştu.",
        variant: "destructive",
      })
    }
  }

  const shareOnSocial = (platform: string) => {
    const encodedUrl = encodeURIComponent(productUrl)
    const encodedText = encodeURIComponent(shareText)
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
    
    toast({
      title: "Paylaşım Açıldı",
      description: `${platform.charAt(0).toUpperCase() + platform.slice(1)} paylaşım penceresi açıldı.`,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Ürünü Paylaş
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
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">{productName}</h3>
            <p className="text-sm text-gray-600">Bu ürünü arkadaşlarınızla paylaşın</p>
          </div>

          {/* Native Share (if supported) */}
          {navigator.share && (
            <Button
              onClick={handleNativeShare}
              className="w-full bg-black hover:bg-gray-800"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Paylaş
            </Button>
          )}

          {/* Copy Link */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Link Kopyala</label>
            <div className="flex gap-2">
              <Input
                value={productUrl}
                readOnly
                className="flex-1 text-sm"
              />
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="px-3"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Sosyal Medyada Paylaş</label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => shareOnSocial('facebook')}
                variant="outline"
                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                Facebook
              </Button>
              
              <Button
                onClick={() => shareOnSocial('twitter')}
                variant="outline"
                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-400"
              >
                <Twitter className="h-4 w-4 text-blue-500" />
                Twitter
              </Button>
              
              <Button
                onClick={() => shareOnSocial('linkedin')}
                variant="outline"
                className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-700"
              >
                <Linkedin className="h-4 w-4 text-blue-700" />
                LinkedIn
              </Button>
              
              <Button
                onClick={() => shareOnSocial('whatsapp')}
                variant="outline"
                className="flex items-center gap-2 hover:bg-green-50 hover:border-green-500"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full"
            >
              Kapat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
