import Link from 'next/link'
import type { Metadata } from 'next'
import './globals.css'
import { LogoPart } from 'lib/part'
import { registerDI } from 'lib/di'

registerDI()

export const metadata:Metadata = {
  title:"Học kanji cùng kyo",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  manifest:"/manifest.json",
  icons:[
    { rel: "icon", url: "/icons/icon_16x16.png" },
    { rel: "icon", url: "/icons/icon_32x32.png" },
    { rel: "apple-touch-icon", url: "/icons/icon_192x192.png" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang= "vi">
      <body className="container">
        <Link href="/" prefetch={false}>
          <LogoPart/>
        </Link>
        { children }
      </body>
    </html>
  )
}