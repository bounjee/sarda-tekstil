'use client'

import Link from "next/link"
import { Package, Plus, Settings, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { useEffect, useState } from 'react'

interface StatItem { title: string; value: string; icon: any; color: string }


const quickActions = [
  { title: "Yeni Ürün Ekle", description: "Sisteme yeni ürün ekleyin", href: "/admin/products/add", icon: Plus },
  { title: "Ürünleri Yönet", description: "Mevcut ürünleri düzenleyin", href: "/admin/products", icon: Package },
  { title: "Ayarlar", description: "Site ayarlarını düzenleyin", href: "/admin/settings", icon: Settings }
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<StatItem[]>([])
  const [activities, setActivities] = useState<{ id: number; message: string; createdAt: number }[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const [prodRes, actRes] = await Promise.all([
          fetch('/api/products', { cache: 'no-store' }),
          fetch('/api/activity', { cache: 'no-store' }),
        ])
        const products = prodRes.ok ? await prodRes.json() : []
        const acts = actRes.ok ? await actRes.json() : []

        const s: StatItem[] = [
          { title: 'Toplam Ürün', value: String(products.length), icon: Package, color: 'bg-blue-500' },
          // Kategori metriği kaldırıldı
          { title: 'Aktif Ürünler', value: String(products.length), icon: Package, color: 'bg-purple-500' },
        ]
        setStats(s)
        setActivities(acts.slice(0, 10))
      } catch {
        setStats([
          { title: 'Toplam Ürün', value: '0', icon: Package, color: 'bg-blue-500' },
          { title: 'Aktif Ürünler', value: '0', icon: Package, color: 'bg-purple-500' },
        ])
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-black">Sarda Tekstil</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-lg font-medium text-gray-700">Admin Panel</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-gray-300">
                Siteye Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Dashboard</h1>
          <p className="text-gray-600 mt-2">Sarda Tekstil yönetim paneline hoş geldiniz</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">Hızlı İşlemler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <Link href={action.href}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-colors">
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-black">Son Aktiviteler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.length === 0 ? (
                <div className="text-gray-600">Henüz aktivite yok</div>
              ) : (
                activities.map((a) => (
                  <div key={a.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{a.message}</span>
                    <span className="text-sm text-gray-500 ml-auto">{new Date(a.createdAt).toLocaleString()}</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
