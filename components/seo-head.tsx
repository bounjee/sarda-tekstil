import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({
  title = "Sarda Tekstil - Geleneksel Sanatın Modern Yorumu",
  description = "Gaziantep'in köklü tekstil geleneğini modern tasarım anlayışıyla buluşturarak, kilim ve bukle üretiminde öncü olmaya devam ediyoruz.",
  keywords = "kilim, bukle, tekstil, Gaziantep, el dokuma, geleneksel, modern, kaliteli kumaş",
  image = "/og-image.jpg",
  url = "https://sardatekstil.com",
  type = "website"
}: SEOHeadProps) {
  const fullTitle = title.includes("Sarda Tekstil") ? title : `${title} | Sarda Tekstil`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sarda Tekstil" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sarda Tekstil" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
    </Head>
  )
}
