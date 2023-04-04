import Link from 'next/link'
import 'reflect-metadata'
import { container } from "tsyringe";
import './globals.css'
import { LogoPartServer } from 'lib/part/index-server';
import { KanjiPostListRepository, KanjiPostRepository } from 'lib/repository';
import { IJPostListRepository, IJPostRepository } from 'lib/type';

container.register(IJPostListRepository, {
  useClass: KanjiPostListRepository
});

container.register(IJPostRepository, {
  useClass: KanjiPostRepository
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