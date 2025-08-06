# 🚀 Deployment Rehberi

Sarda Tekstil web sitesinin production ortamına deploy edilmesi için rehber.

## 📋 Deployment Checklist

### Pre-deployment
- [ ] Tüm testler geçiyor
- [ ] Build başarılı
- [ ] Environment variables ayarlandı
- [ ] SEO meta tagları kontrol edildi
- [ ] Performance audit yapıldı
- [ ] Security scan tamamlandı

### Post-deployment
- [ ] Site erişilebilir
- [ ] Tüm sayfalar çalışıyor
- [ ] Forms test edildi
- [ ] Analytics çalışıyor
- [ ] SSL sertifikası aktif

## 🌐 Vercel Deployment

### Otomatik Deployment
\`\`\`bash
# GitHub'a push yaptığınızda otomatik deploy olur
git add .
git commit -m "feat: new feature"
git push origin main
\`\`\`

### Manuel Deployment
\`\`\`bash
# Vercel CLI ile
npm i -g vercel
vercel

# Production deployment
vercel --prod
\`\`\`

### Environment Variables
Vercel Dashboard'da ayarlanması gerekenler:

\`\`\`env
# Site URL
NEXT_PUBLIC_SITE_URL=https://sardatekstil.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Database (opsiyonel)
DATABASE_URL=postgresql://...

# Email (opsiyonel)
SMTP_HOST=smtp.gmail.com
SMTP_USER=info@sardatekstil.com
SMTP_PASS=app_password
\`\`\`

## 🏗️ Build Optimization

### Next.js Config
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Compression
  compress: true,
  
  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
\`\`\`

### Bundle Analysis
\`\`\`bash
# Bundle boyutunu analiz et
npm run build
npm run analyze

# Lighthouse audit
npx lighthouse https://sardatekstil.com --output html
\`\`\`

## 📊 Performance Monitoring

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Monitoring Tools
\`\`\`javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href,
})

// Performance monitoring
window.addEventListener('load', () => {
  const navigation = performance.getEntriesByType('navigation')[0]
  console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart)
})
\`\`\`

## 🔒 Security

### HTTPS
- SSL sertifikası otomatik (Vercel)
- HTTP'den HTTPS'e yönlendirme

### Security Headers
\`\`\`javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ]
}
\`\`\`

## 🗄️ Database (Opsiyonel)

### Supabase Setup
\`\`\`bash
# Supabase CLI
npm install -g supabase
supabase init
supabase start
\`\`\`

### Environment Variables
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

## 📧 Email Setup (Opsiyonel)

### SMTP Configuration
\`\`\`env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@sardatekstil.com
SMTP_PASS=your_app_password
\`\`\`

### Email Templates
\`\`\`typescript
// lib/email.ts
export const sendQuoteEmail = async (data: QuoteData) => {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@sardatekstil.com',
    subject: 'Yeni Fiyat Teklifi Talebi',
    html: `<h1>Yeni Talep</h1><p>Ürün: ${data.productName}</p>`,
  })
}
\`\`\`

## 🔍 SEO Optimization

### Sitemap
\`\`\`xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sardatekstil.com</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sardatekstil.com/products</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
\`\`\`

### Robots.txt
\`\`\`txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://sardatekstil.com/sitemap.xml
\`\`\`

## 📱 PWA (Opsiyonel)

### Manifest
\`\`\`json
{
  "name": "Sarda Tekstil",
  "short_name": "Sarda",
  "description": "Geleneksel sanatın modern yorumu",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
\`\`\`

## 🔄 CI/CD Pipeline

### GitHub Actions
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
\`\`\`

## 📊 Analytics Setup

### Google Analytics 4
\`\`\`typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
\`\`\`

## 🚨 Error Monitoring

### Sentry (Opsiyonel)
\`\`\`bash
npm install @sentry/nextjs
\`\`\`

\`\`\`javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
\`\`\`

## 🔧 Maintenance

### Regular Tasks
- [ ] Dependency updates (monthly)
- [ ] Security patches (as needed)
- [ ] Performance monitoring (weekly)
- [ ] Backup verification (monthly)
- [ ] SSL certificate renewal (automatic)

### Update Commands
\`\`\`bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
\`\`\`

---

Bu rehber, Sarda Tekstil web sitesinin güvenli ve performanslı şekilde deploy edilmesi için hazırlanmıştır.
