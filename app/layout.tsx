import { HeaderPart } from "app/component/part";
import { AppProvider } from "app/component/part-client";
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
            {children}
          </Fragment>
        </AppProvider>
      </body>
    </html>
  );
}
