import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isAdmin(request: NextRequest): boolean {
  const secret = process.env.ADMIN_SESSION_SECRET
  const session = request.cookies.get('admin_session')?.value
  return Boolean(secret) && session === secret
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/login') || pathname.startsWith('/api/admin/login')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/api/')) {
    // Herkese açık okuma: ürünler ve ayarlar. Diğer her şey admin ister.
    const publicRead =
      request.method === 'GET' &&
      (pathname.startsWith('/api/products') || pathname.startsWith('/api/settings'))
    if (!publicRead && !isAdmin(request)) {
      return NextResponse.json({ message: 'Yetkisiz' }, { status: 401 })
    }
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin')) {
    if (!isAdmin(request)) {
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*']
}
