import { JsonLd } from "component/part";
import { Home } from "mdx/mdx-random-page";
import type { Metadata } from "next";

export const metadata: Metadata = Home.metadata;

export default function Page() {
  return (
    <>
      <JsonLd jsonLd={Home.jsonLd} />
      <div className="prose">
        <Home.default />
      </div>
    </>
  );
}
