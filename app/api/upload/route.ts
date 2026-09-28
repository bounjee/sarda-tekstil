import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { UPLOADS_DIR } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ALLOWED: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
}
const MAX_BYTES = 8 * 1024 * 1024

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ message: 'multipart/form-data gerekli' }, { status: 400 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    if (!file) {
      return NextResponse.json({ message: 'Dosya bulunamadı' }, { status: 400 })
    }
    const ext = ALLOWED[file.type]
    if (!ext) {
      return NextResponse.json({ message: 'Sadece JPG, PNG veya WEBP yüklenebilir' }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ message: 'Dosya en fazla 8 MB olabilir' }, { status: 400 })
    }

    const bytes = Buffer.from(await file.arrayBuffer())
    await fs.mkdir(UPLOADS_DIR, { recursive: true })

    const base = path.parse(file.name).name.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40) || 'gorsel'
    const safeName = `${Date.now()}-${base}${ext}`
    await fs.writeFile(path.join(UPLOADS_DIR, safeName), bytes)

    return NextResponse.json({ url: `/media/${safeName}` }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Yükleme başarısız' }, { status: 500 })
  }
}
