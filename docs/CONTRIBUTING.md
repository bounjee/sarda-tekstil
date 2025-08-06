# 🤝 Katkıda Bulunma Rehberi

Sarda Tekstil web sitesi projesine katkıda bulunmak için rehber.

## 🚀 Başlangıç

### Gereksinimler
- Node.js 18.17+
- Git
- Code editor (VS Code önerili)

### Kurulum
\`\`\`bash
# Repository'yi fork edin ve klonlayın
git clone https://github.com/your-username/sarda-tekstil-website.git
cd sarda-tekstil-website

# Dependencies yükleyin
npm install

# Development server başlatın
npm run dev
\`\`\`

## 📝 Geliştirme Süreci

### 1. Issue Oluşturma
Yeni özellik veya bug için önce issue oluşturun:
- Bug reports için bug template kullanın
- Feature requests için feature template kullanın
- Detaylı açıklama yazın
- Uygun label'ları ekleyin

### 2. Branch Oluşturma
\`\`\`bash
# Feature branch
git checkout -b feature/new-feature-name

# Bug fix branch
git checkout -b fix/bug-description

# Documentation branch
git checkout -b docs/update-readme
\`\`\`

### 3. Kod Yazma
- TypeScript kullanın
- ESLint kurallarına uyun
- Prettier ile formatı koruyun
- Component'lar için JSDoc yazın

### 4. Commit Mesajları
Conventional Commits formatını kullanın:

\`\`\`bash
# Feature
git commit -m "feat: add product search functionality"

# Bug fix
git commit -m "fix: resolve mobile navigation issue"

# Documentation
git commit -m "docs: update API documentation"

# Style
git commit -m "style: fix button padding"

# Refactor
git commit -m "refactor: optimize image loading"

# Test
git commit -m "test: add unit tests for ProductCard"
\`\`\`

### 5. Pull Request
- Descriptive title yazın
- Template'i doldurun
- Screenshots ekleyin (UI değişiklikleri için)
- Reviewer atayın

## 🎯 Kod Standartları

### TypeScript
\`\`\`typescript
// Interface tanımlaması
interface ProductProps {
  id: number
  name: string
  category: 'Kilim' | 'Bukle'
  price?: string
}

// Component tanımlaması
export function ProductCard({ id, name, category, price }: ProductProps) {
  // Component logic
}
\`\`\`

### React Components
\`\`\`typescript
'use client' // Client component ise

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ComponentProps {
  title: string
  onAction?: () => void
}

/**
 * Component açıklaması
 * @param title - Başlık metni
 * @param onAction - Tıklama callback'i
 */
export function Component({ title, onAction }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    // Effect logic
  }, [])
  
  const handleClick = () => {
    setIsLoading(true)
    onAction?.()
    setIsLoading(false)
  }
  
  return (
    <div className="component-wrapper">
      <h2 className="text-xl font-bold">{title}</h2>
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Yükleniyor...' : 'Tıkla'}
      </Button>
    </div>
  )
}
\`\`\`

### CSS/Tailwind
\`\`\`tsx
// Responsive design
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <div className="w-full md:w-1/2">Content</div>
</div>

// Hover effects
<div className="group cursor-pointer">
  <img className="group-hover:scale-105 transition-transform" />
</div>

// Focus states
<button className="focus:outline-none focus:ring-2 focus:ring-black">
  Button
</button>
\`\`\`

## 🧪 Testing

### Unit Tests
\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      category: 'Kilim' as const,
      price: '₺1,000'
    }
    
    render(<ProductCard {...product} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('₺1,000')).toBeInTheDocument()
  })
})
\`\`\`

### Test Komutları
\`\`\`bash
# Tüm testleri çalıştır
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
\`\`\`

## 📁 Dosya Yapısı

### Yeni Component Ekleme
\`\`\`
components/
├── ui/                 # Shadcn/UI components
├── custom-component.tsx # Custom components
└── index.ts           # Export file
\`\`\`

### Yeni Sayfa Ekleme
\`\`\`
app/
├── new-page/
│   ├── page.tsx       # Page component
│   ├── loading.tsx    # Loading UI
│   └── error.tsx      # Error UI
\`\`\`

## 🎨 Design System

### Renk Kullanımı
\`\`\`tsx
// Primary colors
<div className="bg-black text-white">Primary</div>

// Secondary colors
<div className="bg-gray-50 text-gray-900">Secondary</div>

// Status colors
<div className="text-green-600">Success</div>
<div className="text-red-600">Error</div>
\`\`\`

### Spacing
\`\`\`tsx
// Consistent spacing
<div className="p-4 md:p-6 lg:p-8">
  <div className="space-y-4">
    <h2 className="mb-6">Title</h2>
    <p className="mb-4">Paragraph</p>
  </div>
</div>
\`\`\`

## ♿ Accessibility

### ARIA Labels
\`\`\`tsx
<button aria-label="Menüyü kapat">
  <X className="h-6 w-6" />
</button>
\`\`\`

### Keyboard Navigation
\`\`\`tsx
<div 
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleAction()}
  className="focus:outline-none focus:ring-2"
>
  Keyboard accessible
</div>
\`\`\`

### Screen Reader
\`\`\`tsx
<span className="sr-only">Screen reader only text</span>
\`\`\`

## 🔍 Code Review

### Checklist
- [ ] Kod TypeScript kurallarına uygun
- [ ] Component'lar responsive
- [ ] Accessibility standartlarına uygun
- [ ] Performance optimize edilmiş
- [ ] Error handling mevcut
- [ ] Tests yazılmış
- [ ] Documentation güncel

### Review Kriterleri
1. **Functionality** - Kod çalışıyor mu?
2. **Performance** - Optimize edilmiş mi?
3. **Security** - Güvenlik açığı var mı?
4. **Maintainability** - Sürdürülebilir mi?
5. **Accessibility** - Erişilebilir mi?

## 🐛 Bug Reports

### Template
\`\`\`markdown
**Bug Açıklaması**
Kısa ve net açıklama

**Adımlar**
1. Sayfaya git
2. Butona tıkla
3. Hatayı gör

**Beklenen Davranış**
Ne olması gerekiyordu

**Ekran Görüntüleri**
Varsa ekleyin

**Ortam**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
\`\`\`

## ✨ Feature Requests

### Template
\`\`\`markdown
**Özellik Açıklaması**
Yeni özelliğin detaylı açıklaması

**Motivasyon**
Neden bu özellik gerekli?

**Çözüm Önerisi**
Nasıl implement edilebilir?

**Alternatifler**
Başka çözümler düşündünüz mü?
\`\`\`

## 📚 Resources

### Öğrenme Kaynakları
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🤝 Community

### İletişim
- GitHub Issues: Teknik sorular
- GitHub Discussions: Genel tartışmalar
- Email: developer@sardatekstil.com

### Code of Conduct
- Saygılı olun
- Yapıcı geri bildirim verin
- Öğrenmeye açık olun
- Yardımlaşın

---

Katkılarınız için teşekkür ederiz! 🙏
