'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Academy() {
  const courses = [
    {
      title: 'مبانی هوش مصنوعی برای کسب و کار',
      description: 'یادگیری اصول اولیه هوش مصنوعی و نحوه استفاده از آن در کسب و کار',
      duration: '۸ ساعت',
      level: 'مقدماتی',
      price: 'رایگان',
      icon: '🎓',
    },
    {
      title: 'پیاده‌سازی ایجنت‌های هوشمند',
      description: 'آموزش گام به گام ساخت و پیاده‌سازی ایجنت‌های هوش مصنوعی',
      duration: '۱۲ ساعت',
      level: 'متوسط',
      price: '۱,۵۰۰,۰۰۰ تومان',
      icon: '🤖',
    },
    {
      title: 'اتوماسیون فرآیندهای کسب و کار',
      description: 'یادگیری تکنیک‌های اتوماسیون و بهینه‌سازی فرآیندها',
      duration: '۱۰ ساعت',
      level: 'متوسط',
      price: '۱,۲۰۰,۰۰۰ تومان',
      icon: '⚙️',
    },
    {
      title: 'تحلیل داده با هوش مصنوعی',
      description: 'آموزش تحلیل داده و استخراج بینش با ابزارهای هوش مصنوعی',
      duration: '۱۵ ساعت',
      level: 'پیشرفته',
      price: '۲,۰۰۰,۰۰۰ تومان',
      icon: '📊',
    },
    {
      title: 'مدیریت پروژه‌های هوش مصنوعی',
      description: 'نحوه مدیریت و اجرای موفق پروژه‌های هوش مصنوعی در سازمان',
      duration: '۸ ساعت',
      level: 'متوسط',
      price: '۱,۸۰۰,۰۰۰ تومان',
      icon: '📋',
    },
    {
      title: 'امنیت در سیستم‌های هوشمند',
      description: 'اصول امنیت و حریم خصوصی در سیستم‌های مبتنی بر هوش مصنوعی',
      duration: '۶ ساعت',
      level: 'پیشرفته',
      price: '۱,۰۰۰,۰۰۰ تومان',
      icon: '🔒',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">آکادمی آموزشی</h1>
            <p className="text-xl max-w-3xl mx-auto">
              دوره‌های آموزشی جامع برای تسلط بر هوش مصنوعی و اتوماسیون کسب و کار
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-center">
                    <div className="text-6xl mb-3">{course.icon}</div>
                    <h3 className="text-2xl font-bold text-white">
                      {course.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-6 min-h-[60px]">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">مدت دوره:</span>
                        <span className="font-semibold text-gray-900">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">سطح:</span>
                        <span className="font-semibold text-gray-900">{course.level}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">قیمت:</span>
                        <span className={`font-bold ${course.price === 'رایگان' ? 'text-green-600' : 'text-blue-600'}`}>
                          {course.price}
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">
                      ثبت نام در دوره
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    مزایای عضویت در آکادمی
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 text-xl ml-2">✓</span>
                      <span className="text-gray-700">دسترسی به تمام دوره‌های آموزشی</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 text-xl ml-2">✓</span>
                      <span className="text-gray-700">گواهینامه معتبر پس از اتمام دوره</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 text-xl ml-2">✓</span>
                      <span className="text-gray-700">پشتیبانی مستقیم از مدرسین</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 text-xl ml-2">✓</span>
                      <span className="text-gray-700">پروژه‌های عملی و کاربردی</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    عضویت ویژه
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ۵,۰۰۰,۰۰۰ تومان
                    </div>
                    <div className="text-gray-600">دسترسی به تمام دوره‌ها به مدت ۱ سال</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition">
                    خرید عضویت ویژه
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
