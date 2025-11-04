'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import axios from 'axios'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get('token')
    if (!token) {
      router.push('/login')
      return
    }

    const fetchUser = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        const response = await axios.get(`${apiUrl}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(response.data)
      } catch (error) {
        Cookies.remove('token')
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-2xl text-gray-600">در حال بارگذاری...</div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold mb-2">خوش آمدید، {user?.full_name}</h1>
              <p className="text-blue-100">به پنل کاربری آژانس ایجنتیک خوش آمدید</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">اطلاعات کاربری</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 font-semibold">نام:</span>
                    <span className="mr-2 text-gray-900">{user?.full_name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-semibold">ایمیل:</span>
                    <span className="mr-2 text-gray-900">{user?.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-semibold">شماره تماس:</span>
                    <span className="mr-2 text-gray-900">{user?.phone}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">آمار سریع</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">محصولات خریداری شده:</span>
                    <span className="font-bold text-blue-600">۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">دوره‌های در حال گذراندن:</span>
                    <span className="font-bold text-purple-600">۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">درخواست‌های مشاوره:</span>
                    <span className="font-bold text-green-600">۰</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="text-xl font-bold mb-2">خرید محصول</h3>
                <p className="text-blue-100">مشاهده و خرید ایجنت‌های هوشمند</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold mb-2">دوره‌های آموزشی</h3>
                <p className="text-purple-100">شرکت در دوره‌های آکادمی</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-xl font-bold mb-2">درخواست مشاوره</h3>
                <p className="text-pink-100">دریافت مشاوره تخصصی رایگان</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
