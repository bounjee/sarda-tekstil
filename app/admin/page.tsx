'use client'

import Link from "next/link"
import { Package, Plus, Settings, BarChart3, Users, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const adminStats = [
  { title: "Toplam Ürün", value: "24", icon: Package, color: "bg-blue-500" },
  { title: "Kategoriler", value: "2", icon: ShoppingBag, color: "bg-green-500" },
  { title: "Aktif Ürünler", value: "22", icon: BarChart3, color: "bg-purple-500" },
  { title: "Görüntülenme", value: "1,234", icon: Users, color: "bg-orange-500" }
]

const quickActions = [
  { title: "Yeni Ürün Ekle", description: "Sisteme yeni ürün ekleyin", href: "/admin/products/add", icon: Plus },
  { title: "Ürünleri Yönet", description: "Mevcut ürünleri düzenleyin", href: "/admin/products", icon: Package },
  { title: "Ayarlar", description: "Site ayarlarını düzenleyin", href: "/admin/settings", icon: Settings }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
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
          {adminStats.map((stat, index) => (
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
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
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
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Yeni ürün eklendi: "Premium Bukle Serisi"</span>
                <span className="text-sm text-gray-500 ml-auto">2 saat önce</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Ürün güncellendi: "Klasik Kilim Koleksiyonu"</span>
                <span className="text-sm text-gray-500 ml-auto">5 saat önce</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Site ayarları güncellendi</span>
                <span className="text-sm text-gray-500 ml-auto">1 gün önce</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
