import Link from 'next/link'
import 'reflect-metadata'
import { container } from "tsyringe";
import { KanjiPostModel, KanjiPostListModel } from 'lib/model'
import './globals.css'
import { LogoPartServer } from 'lib/part-server';

container.register("IPostListService", {
  useClass: KanjiPostListModel
});

container.register("IPostService", {
  useClass: KanjiPostModel
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