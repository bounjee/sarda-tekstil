# 🧩 Component Dokümantasyonu

Sarda Tekstil web sitesinde kullanılan component'ların kullanım rehberi.

## 📋 İçindekiler

- [UI Components](#ui-components)
- [Custom Components](#custom-components)
- [Layout Components](#layout-components)
- [Form Components](#form-components)

## 🎨 UI Components

### Button
\`\`\`tsx
import { Button } from "@/components/ui/button"

// Temel kullanım
<Button>Tıkla</Button>

// Varyantlar
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Boyutlar
<Button size="sm">Küçük</Button>
<Button size="lg">Büyük</Button>

// Loading state
<Button disabled>
  <LoadingSpinner className="mr-2" />
  Yükleniyor...
</Button>
\`\`\`

### Card
\`\`\`tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Başlık</CardTitle>
  </CardHeader>
  <CardContent>
    <p>İçerik</p>
  </CardContent>
</Card>
\`\`\`

### Input
\`\`\`tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">E-posta</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="ornek@email.com"
    className="border-gray-300 focus:border-black"
  />
</div>
\`\`\`

## 🔧 Custom Components

### CountUp
Sayıları animasyonlu şekilde gösterir.

\`\`\`tsx
import { CountUp } from "@/components/count-up"

<CountUp 
  end={25} 
  duration={2000}
  suffix="+"
  className="text-3xl font-bold"
/>
\`\`\`

**Props:**
- `end`: Hedef sayı
- `duration`: Animasyon süresi (ms)
- `prefix`: Sayı öncesi metin
- `suffix`: Sayı sonrası metin

### ImageWithFallback
Hata durumunda fallback görseli gösteren Image component'i.

\`\`\`tsx
import { ImageWithFallback } from "@/components/image-with-fallback"

<ImageWithFallback
  src="/product.jpg"
  alt="Ürün"
  width={400}
  height={300}
  fallbackSrc="/placeholder.svg"
  className="rounded-lg"
/>
\`\`\`

### LoadingSpinner
Loading durumları için spinner component'i.

\`\`\`tsx
import { LoadingSpinner } from "@/components/loading-spinner"

<LoadingSpinner size="lg" />
<LoadingSpinner size="md" className="text-blue-500" />
\`\`\`

### ErrorBoundary
Hata yakalama ve gösterme component'i.

\`\`\`tsx
import { ErrorBoundary } from "@/components/error-boundary"

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// HOC olarak kullanım
const SafeComponent = withErrorBoundary(YourComponent)
\`\`\`

## 📱 Layout Components

### Container
\`\`\`tsx
<div className="container mx-auto px-4">
  <p>İçerik</p>
</div>
\`\`\`

### Grid System
\`\`\`tsx
// Responsive grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Auto-fit grid
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  <div>Responsive Item</div>
</div>
\`\`\`

### Section
\`\`\`tsx
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Başlık</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* İçerik */}
    </div>
  </div>
</section>
\`\`\`

## 📝 Form Components

### PriceQuoteModal
Fiyat teklifi alma modal'ı.

\`\`\`tsx
import { PriceQuoteModal } from "@/components/price-quote-modal"

const [showModal, setShowModal] = useState(false)

<PriceQuoteModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  productName="Ürün Adı"
  productId={1}
/>
\`\`\`

### ShareModal
Ürün paylaşım modal'ı.

\`\`\`tsx
import { ShareModal } from "@/components/share-modal"

<ShareModal
  isOpen={showShareModal}
  onClose={() => setShowShareModal(false)}
  productName="Ürün Adı"
  productUrl={window.location.href}
/>
\`\`\`

## 🎯 Component Patterns

### Loading States
\`\`\`tsx
// Skeleton loading
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>

// Spinner loading
<div className="flex justify-center py-8">
  <LoadingSpinner size="lg" />
</div>
\`\`\`

### Error States
\`\`\`tsx
<div className="text-center py-8">
  <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
  <h3 className="text-lg font-semibold mb-2">Bir Hata Oluştu</h3>
  <p className="text-gray-600 mb-4">Lütfen tekrar deneyin.</p>
  <Button onClick={retry}>Tekrar Dene</Button>
</div>
\`\`\`

### Empty States
\`\`\`tsx
<div className="text-center py-12">
  <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
  <h3 className="text-lg font-semibold mb-2">Henüz ürün yok</h3>
  <p className="text-gray-600 mb-6">İlk ürününüzü ekleyerek başlayın</p>
  <Button>Ürün Ekle</Button>
</div>
\`\`\`

## 🎨 Styling Patterns

### Hover Effects
\`\`\`tsx
<div className="group cursor-pointer">
  <img className="group-hover:scale-105 transition-transform" />
  <h3 className="group-hover:text-gray-700 transition-colors">Başlık</h3>
</div>
\`\`\`

### Focus States
\`\`\`tsx
<button className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
  Buton
</button>
\`\`\`

### Responsive Design
\`\`\`tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="w-full md:w-1/2">Sol</div>
  <div className="w-full md:w-1/2">Sağ</div>
</div>
\`\`\`

## ♿ Accessibility

### ARIA Labels
\`\`\`tsx
<button aria-label="Menüyü aç">
  <Menu className="h-6 w-6" />
</button>
\`\`\`

### Screen Reader Only
\`\`\`tsx
<span className="sr-only">Ekran okuyucu için açıklama</span>
\`\`\`

### Keyboard Navigation
\`\`\`tsx
<div 
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  className="focus:outline-none focus:ring-2"
>
  Klavye ile erişilebilir
</div>
\`\`\`

## 🔄 State Management

### Local State
\`\`\`tsx
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [data, setData] = useState<Data[]>([])
\`\`\`

### Form State
\`\`\`tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

const handleChange = (field: string, value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }))
}
\`\`\`

## 🧪 Testing

### Component Testing
\`\`\`tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
\`\`\`

---

Bu dokümantasyon, component'ların doğru ve tutarlı kullanımını sağlamak için hazırlanmıştır.
