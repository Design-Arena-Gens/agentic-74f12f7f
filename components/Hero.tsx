import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            هوشمندسازی کسب و کار شما با هوش مصنوعی
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            ما حفره‌های دورریز هزینه را پیدا کرده، اتوماسیون‌های هوشمند اختصاصی طراحی می‌کنیم و جریان‌های کاری هوشمند را برای کسب و کار شما اجرا می‌کنیم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition transform hover:scale-105"
            >
              درخواست مشاوره رایگان
            </Link>
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition transform hover:scale-105"
            >
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
