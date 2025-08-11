'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/admin'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, redirect })
    })
    if (res.ok) {
      const data = await res.json()
      window.location.href = data.redirect || '/admin'
    } else {
      alert('Giriş başarısız')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold text-black">Admin Girişi</h1>
        <div className="space-y-2">
          <label className="block text-sm text-gray-700">Kullanıcı Adı</label>
          <input className="w-full border rounded px-3 py-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="block text-sm text-gray-700">Şifre</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded">Giriş Yap</button>
      </form>
    </div>
  )
}


