import { JsonLdPart } from "component/part";
import { Home } from "mdx/mdx-random-page";
import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = Home.metadata;

export default function Page() {
  return (
    <Fragment>
      <JsonLdPart jsonLd={Home.jsonLd} />
      <div className="prose">
        <Home.default />
      </div>
    </Fragment>
  );
}