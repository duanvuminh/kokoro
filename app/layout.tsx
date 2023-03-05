import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Kokoro xin chào bạn',
  keywords: ["kanji","Tiếng nhật","日本語","漢字"],
  description: 'Học tiếng nhật, kanji vui và thú vị hơn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang= "en" >
    <body>
      <Link href="/"><h1>今日も頑張れ！</h1></Link>
      { children }
    </body>
    </html>
  )
}
