import { HeaderPart } from "component/part";
import { AppProvider } from "component/part-client";
import { appMetadataConst } from "lib/app/const";
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
