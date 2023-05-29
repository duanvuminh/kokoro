import { HeaderPart } from "component/part";
import { SearchProvider } from "component/part-client";
import { appMetadataConst } from "lib/const";
import { Fragment } from "react";
import "./globals.css";

export const metadata = appMetadataConst();

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="vi">
      <body className="container mx-auto pb-4">
        <SearchProvider>
          <Fragment>
            <HeaderPart />
            <section className="p-2 flex justify-center">{children}</section>
          </Fragment>
        </SearchProvider>
      </body>
    </html>
  );
}
