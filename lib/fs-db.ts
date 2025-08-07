import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

async function ensureDataDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })
}

export async function readJsonFile<T>(fileName: string, fallback: T): Promise<T> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, fileName)
  try {
    const content = await fs.readFile(filePath, 'utf8')
    return JSON.parse(content) as T
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      await writeJsonFile<T>(fileName, fallback)
      return fallback
    }
    throw error
  }
}

export async function writeJsonFile<T>(fileName: string, data: T): Promise<void> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, fileName)
  const tmpPath = `${filePath}.tmp`
  const payload = JSON.stringify(data, null, 2)
  await fs.writeFile(tmpPath, payload, 'utf8')
  await fs.rename(tmpPath, filePath)
}

export const productsFileName = 'products.json'
export const settingsFileName = 'settings.json'
export const activityFileName = 'activity.json'


