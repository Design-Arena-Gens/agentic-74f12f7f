export default function Services() {
  const services = [
    {
      title: 'بررسی و تحلیل کسب و کار',
      description: 'شناسایی حفره‌های دورریز هزینه و فرصت‌های بهینه‌سازی در کسب و کار شما',
      icon: '🔍',
    },
    {
      title: 'طراحی اتوماسیون هوشمند',
      description: 'طراحی و پیاده‌سازی سیستم‌های اتوماسیون اختصاصی با هوش مصنوعی',
      icon: '⚙️',
    },
    {
      title: 'اجرای جریان کاری هوشمند',
      description: 'ساخت و اجرای جریان‌های کاری هوشمند برای افزایش بهره‌وری',
      icon: '🚀',
    },
    {
      title: 'ایجنت‌های آماده',
      description: 'دسترسی به ایجنت‌های هوش مصنوعی آماده با قابلیت شخصی‌سازی کامل',
      icon: '🤖',
    },
  ]

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات ما</h2>
          <p className="text-xl text-gray-600">
            راهکارهای هوشمند برای رشد کسب و کار شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
