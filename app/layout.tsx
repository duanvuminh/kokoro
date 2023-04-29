import { HeaderPart } from "component/part-client";
import { appMetadataType } from "lib/type";
import "./globals.css";

export const metadata = appMetadataType;

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="vi">
      <body className="container mx-auto pb-4">
        <HeaderPart />
        <section className="p-2">{children}</section>
      </body>
    </html>
  );
}
