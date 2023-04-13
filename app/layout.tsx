import Link from 'next/link'
import type { Metadata } from 'next'
import './globals.css'
import { LogoPart } from 'lib/part'
import { registerDI } from 'lib/di'

registerDI()

export const metadata:Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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