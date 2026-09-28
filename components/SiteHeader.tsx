'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { buildWhatsAppLink } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/products", label: "Ürünler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
]

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false
  if (href === "/") return pathname === "/"
  if (href === "/products") return pathname.startsWith("/products") || pathname.startsWith("/product/")
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image src="/logo.svg" alt="Sarda Tekstil" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-black">Sarda Tekstil</span>
          </Link>

          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1" aria-label="Ana menü">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-black font-bold"
                      : "text-gray-700 hover:text-black transition-colors font-semibold"
                  }
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <Button>Whatsapp İletişim</Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menüyü aç">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-xs">
              <SheetTitle className="text-left">Menü</SheetTitle>
              <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobil menü">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={
                        "rounded-md px-3 py-3 text-base " +
                        (active
                          ? "bg-gray-100 text-black font-bold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black transition-colors font-semibold")
                      }
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 block"
              >
                <Button className="w-full">Whatsapp İletişim</Button>
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
