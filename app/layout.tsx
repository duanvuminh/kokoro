import Link from 'next/link'
import 'reflect-metadata'
import { container } from "tsyringe";
import { KanjiPostModel, KanjiPostListModel } from 'lib/model'
import './globals.css'

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
      <body>
        <Link href="/">
          <h1>今日も頑張れ！</h1>
        </Link>
        { children }
      </body>
    </html>
  )
}