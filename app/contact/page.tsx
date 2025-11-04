'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">ارتباط با ما</h1>
            <p className="text-xl max-w-3xl mx-auto">
              برای دریافت مشاوره رایگان و بررسی نیازهای کسب و کار خود با ما در تماس باشید
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  اطلاعات تماس
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl ml-4">📧</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">ایمیل</h3>
                      <p className="text-gray-600">info@agenticaiagency.ir</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl ml-4">📞</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">تلفن</h3>
                      <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl ml-4">📍</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">آدرس</h3>
                      <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک ۱۲۳۴</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl ml-4">🕐</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">ساعات کاری</h3>
                      <p className="text-gray-600">شنبه تا پنجشنبه: ۹:۰۰ - ۱۸:۰۰</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  چرا ما را انتخاب کنید؟
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl ml-2">✓</span>
                    <span className="text-gray-700">تیم متخصص و باتجربه در حوزه هوش مصنوعی</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl ml-2">✓</span>
                    <span className="text-gray-700">راهکارهای شخصی‌سازی شده متناسب با نیاز شما</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl ml-2">✓</span>
                    <span className="text-gray-700">پشتیبانی ۲۴/۷ و مشاوره رایگان</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl ml-2">✓</span>
                    <span className="text-gray-700">تضمین کیفیت و بازگشت سرمایه</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
