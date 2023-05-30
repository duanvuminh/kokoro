import { JsonLdPart } from "component/part";
import { Home } from "mdx/mdx-random-page";
import type { Metadata } from "next";

export const metadata: Metadata = Home.metadata;

export default function Page() {
  return (
    <>
      <JsonLdPart jsonLd={Home.jsonLd} />
      <div className="prose max-w-4xl">
        <Home.default />
      </div>
    </>
  );
}
