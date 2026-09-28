import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password, redirect } = body || {}

  const { ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_SESSION_SECRET } = process.env
  if (
    ADMIN_USERNAME && ADMIN_PASSWORD && ADMIN_SESSION_SECRET &&
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {
    const safeRedirect = typeof redirect === 'string' && redirect.startsWith('/admin') ? redirect : '/admin'
    const res = NextResponse.json({ success: true, redirect: safeRedirect })
    // Issue a cookie containing a secret so middleware can check
    const sessionSecret = ADMIN_SESSION_SECRET
    res.cookies.set('admin_session', sessionSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      path: '/',
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}


