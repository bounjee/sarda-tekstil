import { NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile, productsFileName, activityFileName } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface Product {
  id: number
  name: string
  image: string
  sizes: string[]
}

export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id: idStr } = await context.params
    const id = Number(idStr)
    const products = await readJsonFile<Product[]>(productsFileName, [])
    const product = products.find((p) => p.id === id)
    if (!product) {
      return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 })
    }
    return NextResponse.json(product, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ürün getirilemedi' }, { status: 500 })
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id: idStr } = await context.params
    const id = Number(idStr)
    const updates = await request.json()
    const products = await readJsonFile<Product[]>(productsFileName, [])
    const index = products.findIndex((p) => p.id === id)
    if (index === -1) {
      return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 })
    }

    const current = products[index]
    const updated: Product = {
      id: current.id,
      name: String(updates.name ?? current.name),
      image: String(updates.image ?? current.image),
      sizes: Array.isArray(updates.sizes) ? updates.sizes.filter((v: string) => v?.trim()) : current.sizes,
    }

    products[index] = updated
    await writeJsonFile(productsFileName, products)
    // activity
    const activities = await readJsonFile<any[]>(activityFileName, [])
    activities.unshift({ id: Date.now(), type: 'product_updated', message: `Ürün güncellendi: ${updated.name}`, createdAt: Date.now() })
    await writeJsonFile(activityFileName, activities)
    return NextResponse.json(updated, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ürün güncellenemedi' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id: idStr } = await context.params
    const id = Number(idStr)
    const products = await readJsonFile<Product[]>(productsFileName, [])
    const exists = products.some((p) => p.id === id)
    if (!exists) {
      return NextResponse.json({ message: 'Ürün bulunamadı' }, { status: 404 })
    }
    const remaining = products.filter((p) => p.id !== id)
    await writeJsonFile(productsFileName, remaining)
    const activities = await readJsonFile<any[]>(activityFileName, [])
    activities.unshift({ id: Date.now(), type: 'product_deleted', message: `Ürün silindi: ${id}`, createdAt: Date.now() })
    await writeJsonFile(activityFileName, activities)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ürün silinemedi' }, { status: 500 })
  }
}


