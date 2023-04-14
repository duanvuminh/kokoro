import Link from 'next/link'
import type { Metadata } from 'next'
import './globals.css'
import { LogoPart } from 'lib/part'
import { registerDI } from 'lib/di'

registerDI()

//https://beta.nextjs.org/docs/api-reference/metadata#other
export const metadata:Metadata = {
  title:"Học kanji cùng kyo",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  manifest:"/manifest.json",
  //https://rob-ferguson.me/pwa-tips-and-tricks/
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png',type: 'image/png' },
      { url: '/icons/favicon-16x16.png',type: 'image/png' }
    ],
    shortcut:'/icons/favicon.ico',
    apple: [
      { url: '/icons/apple-touch-icon.png',sizes:"180x180",type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
      },
      {
        rel: 'apple-touch-startup-image',
        url: '/images/icon_192x192.png',
      },
    ],
  },
  themeColor:"#ffffff",
  other: {
    'msapplication-TileColor': '#ffc40d',
    'msapplication-config': '/icons/browserconfig.xml',
  },
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