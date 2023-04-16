import Link from "next/link";
import "./globals.css";
import { LogoPart } from "lib/part";
import { registerDI } from "lib/di";
import { appMetadata } from "lib/type";

registerDI();

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="container">
        <header>
          <Link href="/" prefetch={false}>
            <LogoPart />
          </Link>
        </header>
        <section>{children}</section>
      </body>
    </html>
  );
}
