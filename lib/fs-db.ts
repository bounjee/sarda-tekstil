import { promises as fs } from 'fs'
import path from 'path'

// Kalıcı depolama kökü. Hostinger her deploy'da build klasörünü yenilediği için
// STORAGE_DIR build dışındaki bir klasörü göstermeli. Tanımlı değilse repo içi kullanılır.
export const STORAGE_DIR = process.env.STORAGE_DIR || process.cwd()
const DATA_DIR = path.join(STORAGE_DIR, 'data')
// Repo ile gelen başlangıç verisi (ilk açılışta kopyalanır)
const SEED_DIR = path.join(process.cwd(), 'data')
export const UPLOADS_DIR = path.join(STORAGE_DIR, 'uploads')

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
      let initial = fallback
      try {
        initial = JSON.parse(await fs.readFile(path.join(SEED_DIR, fileName), 'utf8')) as T
      } catch {}
      await writeJsonFile<T>(fileName, initial)
      return initial
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
