# 🎨 Tasarım Rehberi

Sarda Tekstil web sitesi için tasarım sistemi ve stil kılavuzu.

## 🎯 Tasarım Felsefesi

- **Minimalist**: Sade ve temiz tasarım
- **Geleneksel + Modern**: Klasik değerler, çağdaş sunum
- **Kullanıcı Odaklı**: Kolay navigasyon ve erişilebilirlik
- **Responsive**: Tüm cihazlarda mükemmel deneyim

## 🎨 Renk Paleti

### Ana Renkler
\`\`\`css
--primary: #000000;        /* Siyah - Ana marka rengi */
--primary-light: #333333;  /* Koyu gri */
--primary-dark: #000000;   /* Saf siyah */
\`\`\`

### İkincil Renkler
\`\`\`css
--secondary: #f5f5f5;      /* Açık gri - Arka plan */
--accent: #ffffff;         /* Beyaz - Vurgu */
--muted: #6b7280;          /* Orta gri - Metin */
\`\`\`

### Durum Renkleri
\`\`\`css
--success: #10b981;        /* Yeşil - Başarı */
--warning: #f59e0b;        /* Turuncu - Uyarı */
--error: #ef4444;          /* Kırmızı - Hata */
--info: #3b82f6;           /* Mavi - Bilgi */
\`\`\`

## 📝 Tipografi

### Font Ailesi
\`\`\`css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
\`\`\`

### Font Boyutları
\`\`\`css
--text-xs: 0.75rem;    /* 12px - Küçük notlar */
--text-sm: 0.875rem;   /* 14px - Yardımcı metin */
--text-base: 1rem;     /* 16px - Ana metin */
--text-lg: 1.125rem;   /* 18px - Büyük metin */
--text-xl: 1.25rem;    /* 20px - Başlık */
--text-2xl: 1.5rem;    /* 24px - Alt başlık */
--text-3xl: 1.875rem;  /* 30px - Büyük başlık */
--text-4xl: 2.25rem;   /* 36px - Hero başlık */
\`\`\`

### Font Ağırlıkları
\`\`\`css
--font-light: 300;     /* İnce */
--font-normal: 400;    /* Normal */
--font-medium: 500;    /* Orta */
--font-semibold: 600;  /* Yarı kalın */
--font-bold: 700;      /* Kalın */
\`\`\`

## 📏 Spacing Sistemi

### Base Unit: 4px
\`\`\`css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
\`\`\`

## 📱 Breakpoints

\`\`\`css
/* Mobile First Yaklaşım */
sm: 640px;    /* Küçük tablet */
md: 768px;    /* Tablet */
lg: 1024px;   /* Küçük masaüstü */
xl: 1280px;   /* Masaüstü */
2xl: 1536px;  /* Büyük masaüstü */
\`\`\`

## 🎭 Animasyonlar

### Geçiş Süreleri
\`\`\`css
--duration-fast: 150ms;     /* Hızlı */
--duration-normal: 300ms;   /* Normal */
--duration-slow: 500ms;     /* Yavaş */
\`\`\`

### Easing Functions
\`\`\`css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
\`\`\`

### Hover Efektleri
\`\`\`css
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out);
}
.hover-lift:hover {
  transform: translateY(-2px);
}
\`\`\`

## 🔲 Shadows

\`\`\`css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
\`\`\`

## 🎯 Component Patterns

### Button Styles
\`\`\`css
/* Primary Button */
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all var(--duration-normal);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}
\`\`\`

### Card Styles
\`\`\`css
.card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
\`\`\`

## 📐 Layout Grid

### Container
\`\`\`css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
\`\`\`

### Grid System
\`\`\`css
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); }
\`\`\`

## 🎨 Kullanım Örnekleri

### Hero Section
\`\`\`jsx
<section className="bg-black text-white py-20">
  <div className="container">
    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
      Geleneksel Sanatın Modern Yorumu
    </h1>
  </div>
</section>
\`\`\`

### Product Card
\`\`\`jsx
<div className="card hover:shadow-xl transition-shadow">
  <img className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Ürün Adı</h3>
    <p className="text-gray-600 mb-4">Açıklama</p>
    <button className="btn-primary w-full">Detaylar</button>
  </div>
</div>
\`\`\`

## ♿ Erişilebilirlik

### Renk Kontrastı
- AA Standardı: 4.5:1 (normal metin)
- AAA Standardı: 7:1 (büyük metin)

### Focus States
\`\`\`css
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
\`\`\`

### Screen Reader
\`\`\`jsx
<span className="sr-only">Ekran okuyucu için metin</span>
\`\`\`

## 📱 Mobile Design

### Touch Targets
- Minimum 44px x 44px
- Aralarında 8px boşluk

### Mobile Navigation
\`\`\`jsx
<nav className="md:hidden">
  <button className="hamburger">☰</button>
</nav>
\`\`\`

## 🎯 Best Practices

1. **Consistency** - Tutarlı spacing ve renk kullanımı
2. **Hierarchy** - Net görsel hiyerarşi
3. **Readability** - Okunabilir font boyutları
4. **Performance** - Optimize edilmiş görseller
5. **Accessibility** - Erişilebilir tasarım

---

Bu rehber, Sarda Tekstil web sitesinin görsel tutarlılığını sağlamak için hazırlanmıştır.
