import Link from 'next/link'
import 'reflect-metadata'
import { container } from "tsyringe"
import './globals.css'
import { LogoPartServer } from 'lib/part/index-server'
import { KanjiPostStaticPathRepository, KanjiPostRepository, KanjiSubjectStaticPathRepository, KanjiSubjectRepository } from 'lib/repository'
import { IJPostStaticPathClient, IJPostClient, IJSubjectStatiPathClient, IJSubjectClient } from 'lib/type'

container.register(IJPostClient, {
  useClass: KanjiPostRepository
});

container.register(IJPostStaticPathClient, {
  useClass: KanjiPostStaticPathRepository
});

container.register(IJSubjectClient, {
  useClass: KanjiSubjectRepository
});

container.register(IJSubjectStatiPathClient, {
  useClass: KanjiSubjectStaticPathRepository
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang= "vi">
      <body className="container">
        <Link href="/">
          <LogoPartServer/>
        </Link>
        { children }
      </body>
    </html>
  )
}