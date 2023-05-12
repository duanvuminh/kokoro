import { HeaderPart } from "component/part";
import { SearchProvider } from "component/part-client";
import { appMetadataType } from "lib/type";
import { Fragment } from "react";
import "./globals.css";

export const metadata = appMetadataType();

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="vi">
      <body className="container mx-auto pb-4">
        <SearchProvider>
          <Fragment>
            <HeaderPart />
            <section className="p-2">{children}</section>
          </Fragment>
        </SearchProvider>
      </body>
    </html>
  );
}
