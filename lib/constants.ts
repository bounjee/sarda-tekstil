export const STANDARD_SIZES: string[] = [
  '40x60',
  '50x60',
  '50x70',
  '50x80',
  '60x100',
  '65x120',
  '80x125',
  '80x150',
  '80x200',
  '80x300',
  '100x150',
  '100x200',
  '100x300',
  '120x180',
  '140x200',
  '160x230',
  '160x250',
  '180x280',
  '200x300',
]

export const WHATSAPP_NUMBER = '905555555555'

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}


