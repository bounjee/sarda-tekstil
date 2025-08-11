import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password, redirect } = body || {}

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true, redirect: redirect || '/admin' })
    // Issue a cookie containing a secret so middleware can check
    const sessionSecret = process.env.ADMIN_SESSION_SECRET || 'dev-secret'
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


