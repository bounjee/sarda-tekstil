import { promises as fs } from 'fs'
import path from 'path'
import { UPLOADS_DIR } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

// Admin panelden yüklenen görselleri kalıcı depodan sunar
export async function GET(_req: Request, context: { params: Promise<{ name: string }> }) {
  const { name } = await context.params
  const safe = path.basename(name)
  const type = TYPES[path.extname(safe).toLowerCase()]
  if (!type) return new Response('Not found', { status: 404 })
  try {
    const data = await fs.readFile(path.join(UPLOADS_DIR, safe))
    return new Response(new Uint8Array(data), {
      headers: { 'Content-Type': type, 'Cache-Control': 'public, max-age=31536000, immutable' },
    })
  } catch {
    return new Response('Not found', { status: 404 })
  }
}
