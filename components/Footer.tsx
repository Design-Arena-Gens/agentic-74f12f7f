export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">آژانس ایجنتیک</h3>
            <p className="text-gray-400">
              مشاوره هوشمندسازی کسب و کارها و فروش ایجنت‌های آماده شخصی‌سازی
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">خانه</a></li>
              <li><a href="/products" className="hover:text-white transition">محصولات</a></li>
              <li><a href="/articles" className="hover:text-white transition">مقالات</a></li>
              <li><a href="/academy" className="hover:text-white transition">آکادمی</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ایمیل: info@agenticaiagency.ir</li>
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© ۱۴۰۳ آژانس ایجنتیک. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
