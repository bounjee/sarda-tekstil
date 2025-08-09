import { NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile, productsFileName } from '@/lib/fs-db'
import { writeJsonFile as writeFile, readJsonFile as readFile, activityFileName } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface Product {
  id: number
  name: string
  image: string
  sizes: string[]
}

export async function GET() {
  try {
    const products = await readJsonFile<Product[]>(productsFileName, [])
    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ürünler yüklenemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body?.name) {
      return NextResponse.json({ message: 'Zorunlu alanlar eksik' }, { status: 400 })
    }

    const products = await readJsonFile<Product[]>(productsFileName, [])

    const newProduct: Product = {
      id: Date.now(),
      name: String(body.name),
      image: String(body.image || ''),
      sizes: Array.isArray(body.sizes) ? body.sizes.filter((v: string) => v?.trim()) : [],
    }

    const updated = [...products, newProduct]
    await writeJsonFile(productsFileName, updated)
    // log activity
    const activities = await readFile<any[]>(activityFileName, [])
    activities.unshift({ id: Date.now(), type: 'product_added', message: `Yeni ürün eklendi: ${newProduct.name}`, createdAt: Date.now() })
    await writeFile(activityFileName, activities)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Ürün eklenemedi' }, { status: 500 })
  }
}


