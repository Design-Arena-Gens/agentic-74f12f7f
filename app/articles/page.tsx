'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Articles() {
  const articles = [
    {
      title: 'چگونه هوش مصنوعی می‌تواند کسب و کار شما را متحول کند؟',
      excerpt: 'در این مقاله به بررسی راه‌های استفاده از هوش مصنوعی برای بهبود فرآیندهای کسب و کار می‌پردازیم...',
      date: '۱۵ آذر ۱۴۰۳',
      category: 'هوش مصنوعی',
      image: '🤖',
    },
    {
      title: 'مزایای اتوماسیون فرآیندهای کسب و کار',
      excerpt: 'اتوماسیون می‌تواند به کاهش هزینه‌ها، افزایش بهره‌وری و بهبود کیفیت خدمات کمک کند...',
      date: '۱۲ آذر ۱۴۰۳',
      category: 'اتوماسیون',
      image: '⚙️',
    },
    {
      title: 'راهنمای انتخاب ایجنت هوشمند مناسب',
      excerpt: 'انتخاب ایجنت مناسب بستگی به نیازهای خاص کسب و کار شما دارد. در این مقاله معیارهای انتخاب را بررسی می‌کنیم...',
      date: '۱۰ آذر ۱۴۰۳',
      category: 'راهنما',
      image: '📚',
    },
    {
      title: 'آینده خدمات مشتری با هوش مصنوعی',
      excerpt: 'پشتیبانی مشتری هوشمند می‌تواند تجربه مشتری را به طور چشمگیری بهبود بخشد...',
      date: '۸ آذر ۱۴۰۳',
      category: 'پشتیبانی مشتری',
      image: '💬',
    },
    {
      title: 'کاهش هزینه‌های عملیاتی با تحلیل هوشمند',
      excerpt: 'شناسایی حفره‌های دورریز هزینه اولین قدم برای بهینه‌سازی کسب و کار است...',
      date: '۵ آذر ۱۴۰۳',
      category: 'تحلیل',
      image: '💰',
    },
    {
      title: 'پیاده‌سازی موفق پروژه‌های هوش مصنوعی',
      excerpt: 'نکات کلیدی برای اجرای موفق پروژه‌های هوش مصنوعی در سازمان‌ها...',
      date: '۳ آذر ۱۴۰۳',
      category: 'مدیریت پروژه',
      image: '🚀',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">مقالات و مطالب آموزشی</h1>
            <p className="text-xl max-w-3xl mx-auto">
              آخرین اخبار، راهنماها و نکات کاربردی در حوزه هوش مصنوعی و اتوماسیون کسب و کار
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 h-48 flex items-center justify-center text-8xl">
                    {article.image}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                      ادامه مطلب ←
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">
                مشاهده مقالات بیشتر
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
