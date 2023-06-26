import { HeaderPart } from "component/part";
import { AppProvider } from "component/part-client";
import { appMetadataConst } from "lib/const";
import { Fragment } from "react";
import "./globals.css";

export const metadata = appMetadataConst();

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="vi">
      <body className="container mx-auto pb-4">
        <AppProvider>
          <Fragment>
            <HeaderPart />
            <main className="max-w-2xl p-2 sm:p-0 sm:mt-5 mx-auto">
              {children}
            </main>
          </Fragment>
        </AppProvider>
      </body>
    </html>
  );
}
