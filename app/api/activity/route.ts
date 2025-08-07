import { NextResponse } from 'next/server'
import { readJsonFile, writeJsonFile, activityFileName } from '@/lib/fs-db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export interface ActivityItem {
  id: number
  type: 'product_added' | 'product_updated' | 'product_deleted' | 'settings_updated'
  message: string
  createdAt: number
}

export async function GET() {
  const items = await readJsonFile<ActivityItem[]>(activityFileName, [])
  // son eklenenler en üstte
  return NextResponse.json(items.sort((a, b) => b.createdAt - a.createdAt))
}

export async function POST(request: Request) {
  const body = await request.json()
  const items = await readJsonFile<ActivityItem[]>(activityFileName, [])
  const item: ActivityItem = {
    id: Date.now(),
    type: body.type,
    message: String(body.message || ''),
    createdAt: Date.now(),
  }
  await writeJsonFile(activityFileName, [item, ...items])
  return NextResponse.json(item, { status: 201 })
}


