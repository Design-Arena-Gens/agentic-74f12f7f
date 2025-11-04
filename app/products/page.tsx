'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Products() {
  const products = [
    {
      title: 'ایجنت پشتیبانی مشتری',
      description: 'پاسخگویی هوشمند به سوالات مشتریان ۲۴/۷ با قابلیت یادگیری از تعاملات',
      price: '۲,۵۰۰,۰۰۰ تومان',
      features: ['پاسخگویی خودکار', 'یکپارچه‌سازی با CRM', 'گزارش‌دهی تحلیلی', 'شخصی‌سازی کامل'],
    },
    {
      title: 'ایجنت فروش و بازاریابی',
      description: 'افزایش نرخ تبدیل با هوش مصنوعی و تحلیل رفتار مشتریان',
      price: '۳,۸۰۰,۰۰۰ تومان',
      features: ['تحلیل رفتار کاربر', 'پیشنهاد هوشمند محصول', 'اتوماسیون فروش', 'پیگیری سرنخ‌ها'],
    },
    {
      title: 'ایجنت مدیریت منابع انسانی',
      description: 'بهینه‌سازی فرآیندهای استخدام، ارزیابی و آموزش کارکنان',
      price: '۴,۵۰۰,۰۰۰ تومان',
      features: ['غربالگری رزومه', 'مصاحبه هوشمند', 'ارزیابی عملکرد', 'برنامه‌ریزی آموزش'],
    },
    {
      title: 'ایجنت تحلیل داده',
      description: 'تحلیل پیشرفته داده‌های کسب و کار و ارائه بینش‌های عملیاتی',
      price: '۵,۲۰۰,۰۰۰ تومان',
      features: ['تحلیل داده‌های بزرگ', 'پیش‌بینی روندها', 'داشبورد تعاملی', 'هشدار هوشمند'],
    },
    {
      title: 'ایجنت مدیریت پروژه',
      description: 'هماهنگی و مدیریت هوشمند پروژه‌ها با تخصیص بهینه منابع',
      price: '۳,۲۰۰,۰۰۰ تومان',
      features: ['برنامه‌ریزی خودکار', 'تخصیص منابع', 'ردیابی پیشرفت', 'مدیریت ریسک'],
    },
    {
      title: 'ایجنت مالی و حسابداری',
      description: 'اتوماسیون فرآیندهای مالی و گزارش‌دهی دقیق و به‌موقع',
      price: '۴,۸۰۰,۰۰۰ تومان',
      features: ['ثبت خودکار تراکنش', 'تطبیق بانکی', 'گزارش‌های مالی', 'پیش‌بینی جریان نقدی'],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">محصولات ما</h1>
            <p className="text-xl max-w-3xl mx-auto">
              ایجنت‌های هوش مصنوعی آماده با قابلیت شخصی‌سازی کامل برای نیازهای کسب و کار شما
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.title}
                    </h3>
                    <p className="text-blue-100">{product.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="text-3xl font-bold text-gray-900 mb-6">
                      {product.price}
                    </div>

                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 ml-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">
                      درخواست خرید
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                نیاز به ایجنت سفارشی دارید؟
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                ما می‌توانیم ایجنت هوش مصنوعی اختصاصی متناسب با نیازهای کسب و کار شما بسازیم
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
