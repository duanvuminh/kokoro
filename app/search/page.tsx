import { HeaderPartClient } from "component/part-client";
import { Search } from "mdx/mdx-random-page";
import type { Metadata } from "next";
import { Fragment } from "react";


export default function Page() {
  return (
    <Fragment>
      <HeaderPartClient />
      <div className="prose">
        <Search.default />
      </div>
    </Fragment>
  );
}
