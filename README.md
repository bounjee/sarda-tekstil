# 🏭 Sarda Tekstil Website

Modern, responsive ve kullanıcı dostu bir tekstil firması web sitesi. Next.js 15, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 📋 İçindekiler

- [🚀 Özellikler](#-özellikler)
- [🛠️ Teknolojiler](#️-teknolojiler)
- [📁 Proje Yapısı](#-proje-yapısı)
- [⚡ Kurulum](#-kurulum)
- [🎨 Tasarım Sistemi](#-tasarım-sistemi)
- [🔧 Geliştirme](#-geliştirme)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Güvenlik](#-güvenlik)
- [⚡ Performans](#-performans)
- [🧪 Test](#-test)
- [🚀 Deployment](#-deployment)
- [📞 Destek](#-destek)

## 🚀 Özellikler

### 🎨 Frontend Özellikleri
- **Modern UI/UX** - Temiz, profesyonel ve kullanıcı dostu arayüz
- **Responsive Design** - Tüm cihazlarda mükemmel görüntü
- **Dark/Light Theme** - Otomatik tema desteği
- **Smooth Animations** - CSS ve Framer Motion animasyonları
- **Interactive Components** - Hover efektleri ve micro-interactions
- **Accessibility** - WCAG 2.1 AA standartlarına uygun

### 📱 Sayfa Yapısı
- **Ana Sayfa** - Hero section, ürün showcase, istatistikler
- **Ürünler** - Filtreleme, arama, grid/list görünüm
- **Ürün Detay** - Galeri, özellikler, fiyat teklifi
- **Hakkımızda** - Şirket hikayesi, değerler, timeline
- **İletişim** - Form, harita, iletişim bilgileri
- **Kalite Politikası** - Kalite standartları ve sertifikalar
- **Sürdürülebilirlik** - Çevre politikaları ve hedefler

### 🛠️ Admin Panel
- **Dashboard** - Genel istatistikler ve hızlı erişim
- **Ürün Yönetimi** - CRUD işlemleri (Ekleme, düzenleme, silme)
- **Fiyat Teklifi Yönetimi** - Gelen teklifleri görüntüleme
- **Ayarlar** - Site ayarları, SEO, sosyal medya
- **Responsive Admin** - Mobil uyumlu admin paneli

### ⚡ Teknik Özellikler
- **Next.js 15** - App Router, Server Components, RSC
- **TypeScript** - Tip güvenliği ve IntelliSense
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern UI component library
- **Error Boundaries** - Hata yakalama ve kurtarma
- **Loading States** - Skeleton loaders ve spinners
- **Image Optimization** - Next.js Image component
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

## 🛠️ Teknolojiler

### Frontend Stack
\`\`\`json
{
  "framework": "Next.js 15",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "components": "Shadcn/UI",
  "icons": "Lucide React",
  "animations": "CSS Transitions",
  "forms": "React Hook Form",
  "state": "React Hooks"
}
\`\`\`

### Development Tools
\`\`\`json
{
  "bundler": "Turbopack",
  "linting": "ESLint",
  "formatting": "Prettier",
  "git": "Git",
  "package-manager": "npm/yarn/pnpm"
}
\`\`\`

### Production Features
\`\`\`json
{
  "seo": "Next.js SEO",
  "analytics": "Ready for Google Analytics",
  "monitoring": "Error Boundaries",
  "performance": "Next.js Optimizations",
  "security": "Input Sanitization, XSS Protection"
}
\`\`\`

## 📁 Proje Yapısı

\`\`\`
sarda-tekstil-website/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 admin/                    # Admin panel sayfaları
│   │   ├── 📄 page.tsx             # Admin dashboard
│   │   ├── 📁 products/            # Ürün yönetimi
│   │   │   ├── 📄 page.tsx         # Ürün listesi
│   │   │   ├── 📁 add/             # Ürün ekleme
│   │   │   └── 📁 edit/[id]/       # Ürün düzenleme
│   │   └── 📁 settings/            # Site ayarları
│   ├── 📁 about/                   # Hakkımızda sayfası
│   ├── 📁 contact/                 # İletişim sayfası
│   ├── 📁 products/                # Ürünler sayfası
│   ├── 📁 product/[id]/           # Ürün detay sayfası
│   ├── 📁 quality-policy/         # Kalite politikası
│   ├── 📁 sustainability/         # Sürdürülebilirlik
│   ├── 📄 globals.css             # Global stiller
│   ├── 📄 layout.tsx              # Root layout
│   └── 📄 page.tsx                # Ana sayfa
├── 📁 components/                  # Reusable components
│   ├── 📄 error-boundary.tsx      # Hata yakalama
│   ├── 📄 loading-spinner.tsx     # Loading bileşenleri
│   ├── 📄 image-with-fallback.tsx # Resim fallback
│   ├── 📄 price-quote-modal.tsx   # Fiyat teklifi modal
│   ├── 📄 share-modal.tsx         # Paylaşım modal
│   ├── 📄 count-up.tsx            # Sayaç animasyonu
│   └── 📁 ui/                     # Shadcn/UI components
├── 📁 public/                     # Static assets
│   ├── 📁 images/                 # Ürün görselleri
│   └── 📁 icons/                  # İkonlar
├── 📁 lib/                        # Utility functions
├── 📁 hooks/                      # Custom hooks
├── 📁 types/                      # TypeScript type definitions
├── 📁 docs/                       # Dokümantasyon
│   ├── 📄 DESIGN.md               # Tasarım rehberi
│   ├── 📄 COMPONENTS.md           # Component dokümantasyonu
│   └── 📄 API.md                  # API dokümantasyonu
├── 📄 package.json                # Dependencies
├── 📄 next.config.mjs             # Next.js config
├── 📄 tailwind.config.ts          # Tailwind config
├── 📄 tsconfig.json               # TypeScript config
└── 📄 README.md                   # Bu dosya
\`\`\`

## ⚡ Kurulum

### Gereksinimler
- **Node.js** 18.17 veya üzeri
- **npm**, **yarn** veya **pnpm**
- **Git**

### Adım Adım Kurulum

1. **Repository'yi klonlayın**
\`\`\`bash
git clone https://github.com/your-username/sarda-tekstil-website.git
cd sarda-tekstil-website
\`\`\`

2. **Bağımlılıkları yükleyin**
\`\`\`bash
# npm kullanarak
npm install

# yarn kullanarak
yarn install

# pnpm kullanarak
pnpm install
\`\`\`

3. **Environment variables ayarlayın**
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. **Geliştirme sunucusunu başlatın**
\`\`\`bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
\`\`\`

5. **Tarayıcıda açın**
\`\`\`
http://localhost:3000
\`\`\`

### Production Build

\`\`\`bash
# Build oluştur
npm run build

# Production sunucusu başlat
npm start

# Build'i analiz et
npm run analyze
\`\`\`

## 🎨 Tasarım Sistemi

### Renk Paleti
\`\`\`css
/* Primary Colors */
--primary: #000000;        /* Siyah */
--primary-foreground: #ffffff;

/* Secondary Colors */
--secondary: #f5f5f5;      /* Açık gri */
--secondary-foreground: #000000;

/* Accent Colors */
--accent: #ffffff;         /* Beyaz */
--accent-foreground: #000000;

/* Status Colors */
--success: #10b981;        /* Yeşil */
--warning: #f59e0b;        /* Turuncu */
--error: #ef4444;          /* Kırmızı */
--info: #3b82f6;           /* Mavi */
\`\`\`

### Typography
\`\`\`css
/* Font Family */
font-family: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;        /* 12px */
--text-sm: 0.875rem;       /* 14px */
--text-base: 1rem;         /* 16px */
--text-lg: 1.125rem;       /* 18px */
--text-xl: 1.25rem;        /* 20px */
--text-2xl: 1.5rem;        /* 24px */
--text-3xl: 1.875rem;      /* 30px */
--text-4xl: 2.25rem;       /* 36px */
--text-5xl: 3rem;          /* 48px */
\`\`\`

### Spacing System
\`\`\`css
/* Base unit: 4px */
--space-1: 0.25rem;        /* 4px */
--space-2: 0.5rem;         /* 8px */
--space-3: 0.75rem;        /* 12px */
--space-4: 1rem;           /* 16px */
--space-6: 1.5rem;         /* 24px */
--space-8: 2rem;           /* 32px */
--space-12: 3rem;          /* 48px */
--space-16: 4rem;          /* 64px */
\`\`\`

### Breakpoints
\`\`\`css
/* Mobile First Approach */
sm: 640px;    /* Small devices */
md: 768px;    /* Medium devices */
lg: 1024px;   /* Large devices */
xl: 1280px;   /* Extra large devices */
2xl: 1536px;  /* 2X Extra large devices */
\`\`\`

## 🔧 Geliştirme

### Kod Standartları

#### TypeScript
\`\`\`typescript
// Interface tanımlaması
interface Product {
  id: number
  name: string
  category: 'Kilim' | 'Bukle'
  price: string
  image: string
  description: string
}

// Component props
interface ProductCardProps {
  product: Product
  onSelect?: (product: Product) => void
}

// Component tanımlaması
export function ProductCard({ product, onSelect }: ProductCardProps) {
  // Component logic
}
\`\`\`

#### Component Yapısı
\`\`\`typescript
'use client' // Client component ise

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ComponentProps {
  // Props interface
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Hooks
  const [state, setState] = useState()
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, [])
  
  // Event handlers
  const handleClick = () => {
    // Handler logic
  }
  
  // Render
  return (
    <div className="component-class">
      {/* JSX */}
    </div>
  )
}
\`\`\`

### Klasör Yapısı Kuralları

1. **Pages** - `app/` klasöründe Next.js App Router yapısı
2. **Components** - `components/` klasöründe reusable componentler
3. **Hooks** - `hooks/` klasöründe custom hooklar
4. **Utils** - `lib/` klasöründe utility fonksiyonları
5. **Types** - `types/` klasöründe TypeScript tipleri

### Git Workflow

\`\`\`bash
# Feature branch oluştur
git checkout -b feature/new-feature

# Değişiklikleri commit et
git add .
git commit -m "feat: add new feature"

# Push et
git push origin feature/new-feature

# Pull request oluştur
\`\`\`

### Commit Message Formatı
\`\`\`
type(scope): description

feat: yeni özellik
fix: bug düzeltmesi
docs: dokümantasyon
style: kod formatı
refactor: kod refactoring
test: test ekleme
chore: build/config değişiklikleri
\`\`\`

## 📱 Responsive Design

### Mobile First Yaklaşım
\`\`\`css
/* Base styles (mobile) */
.component {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: 1.5rem;
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 2rem;
    font-size: 1.25rem;
  }
}
\`\`\`

### Tailwind Responsive Classes
\`\`\`html
<!-- Mobile first responsive -->
<div class="p-4 md:p-6 lg:p-8">
  <h1 class="text-2xl md:text-3xl lg:text-4xl">
    Responsive Title
  </h1>
</div>
\`\`\`

## 🔒 Güvenlik

### Input Sanitization
\`\`\`typescript
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // HTML tag koruması
    .trim()
    .substring(0, 500) // Length limit
}
\`\`\`

### XSS Koruması
\`\`\`typescript
// Güvenli HTML rendering
const SafeHTML = ({ content }: { content: string }) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: DOMPurify.sanitize(content) 
      }} 
    />
  )
}
\`\`\`

### CSRF Koruması
\`\`\`typescript
// Form submission with CSRF token
const submitForm = async (data: FormData) => {
  const token = await getCSRFToken()
  
  return fetch('/api/submit', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
\`\`\`

## ⚡ Performans

### Image Optimization
\`\`\`typescript
import Image from 'next/image'

// Optimized image component
<Image
  src="/product.jpg"
  alt="Product"
  width={600}
  height={400}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
\`\`\`

### Code Splitting
\`\`\`typescript
import { lazy, Suspense } from 'react'

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Usage with Suspense
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
\`\`\`

### Bundle Analysis
\`\`\`bash
# Bundle boyutunu analiz et
npm run analyze

# Lighthouse audit
npm run lighthouse
\`\`\`

## 🧪 Test

### Unit Tests
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders product information', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      category: 'Kilim',
      price: '₺1,000',
      image: '/test.jpg',
      description: 'Test description'
    }
    
    render(<ProductCard product={product} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('₺1,000')).toBeInTheDocument()
  })
})
\`\`\`

### E2E Tests
\`\`\`typescript
import { test, expect } from '@playwright/test'

test('product page navigation', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="products-link"]')
  await expect(page).toHaveURL('/products')
  
  await page.click('[data-testid="product-card"]:first-child')
  await expect(page).toHaveURL(/\/product\/\d+/)
})
\`\`\`

## 🚀 Deployment

### Vercel Deployment
\`\`\`bash
# Vercel CLI ile deploy
npm i -g vercel
vercel

# Production deployment
vercel --prod
\`\`\`

### Environment Variables
\`\`\`bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://sardatekstil.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
DATABASE_URL=postgresql://...
SMTP_HOST=smtp.gmail.com
SMTP_USER=info@sardatekstil.com
SMTP_PASS=app_password
\`\`\`

### Build Optimization
\`\`\`javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
\`\`\`

## 📊 Analytics & Monitoring

### Google Analytics
\`\`\`typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
\`\`\`

### Error Monitoring
\`\`\`typescript
// Error boundary ile hata yakalama
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Error reporting service'e gönder
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Sentry, LogRocket vb. servislere gönder
    if (typeof window !== 'undefined') {
      // Client-side error reporting
    }
  }
}
\`\`\`

## 🔄 API Entegrasyonu

### REST API Structure
\`\`\`typescript
// types/api.ts
export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// lib/api.ts
export class APIClient {
  private baseURL = process.env.NEXT_PUBLIC_API_URL
  
  async get<T>(endpoint: string): Promise<APIResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`)
      return await response.json()
    } catch (error) {
      return { success: false, error: 'Network error' }
    }
  }
  
  async post<T>(endpoint: string, data: any): Promise<APIResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      return await response.json()
    } catch (error) {
      return { success: false, error: 'Network error' }
    }
  }
}
\`\`\`

## 📞 Destek

### Geliştirici İletişim
- **Email**: developer@sardatekstil.com
- **GitHub**: [Repository Issues](https://github.com/your-username/sarda-tekstil-website/issues)
- **Documentation**: [Wiki](https://github.com/your-username/sarda-tekstil-website/wiki)

### Sık Sorulan Sorular

**Q: Yeni bir sayfa nasıl eklenir?**
A: `app/` klasöründe yeni bir klasör oluşturun ve içine `page.tsx` dosyası ekleyin.

**Q: Yeni bir component nasıl oluşturulur?**
A: `components/` klasöründe yeni dosya oluşturun ve export edin.

**Q: Stil değişiklikleri nasıl yapılır?**
A: Tailwind CSS sınıflarını kullanın veya `globals.css` dosyasını düzenleyin.

**Q: Database nasıl bağlanır?**
A: `lib/db.ts` dosyasında database connection'ı yapılandırın.

### Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

---

**Sarda Tekstil Website** - Modern web teknolojileri ile geliştirilmiş, kullanıcı dostu ve performanslı bir tekstil firması web sitesi.
\`\`\`
