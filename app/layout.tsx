import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'آژانس هوش مصنوعی ایجنتیک',
  description: 'مشاوره هوشمندسازی کسب و کارها و فروش ایجنت‌های آماده شخصی‌سازی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">{children}</body>
    </html>
  )
}
