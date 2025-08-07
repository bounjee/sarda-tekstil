import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

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

    const bytes = Buffer.from(await file.arrayBuffer())
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    await fs.mkdir(uploadsDir, { recursive: true })

    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '')}`
    const filePath = path.join(uploadsDir, safeName)
    await fs.writeFile(filePath, bytes)

    const publicUrl = `/uploads/${safeName}`
    return NextResponse.json({ url: publicUrl }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Yükleme başarısız' }, { status: 500 })
  }
}


