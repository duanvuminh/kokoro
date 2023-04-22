import React from "react";
import "./globals.css";
import { HeaderPart, LogoPart } from "component/part";
import { registerDI } from "lib/di";
import { appMetadata } from "lib/type";
import { CloseProvider } from "component/part-client";

registerDI();

export const metadata = appMetadata;

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="vi">
      <body className="container mx-auto">
        <CloseProvider>
          <>
            <HeaderPart />
            <section className="p-2 prose">{children}</section>
          </>
        </CloseProvider>
      </body>
    </html>
  );
}
