import { HeaderPartClient, SearchPartClient } from "component/part-client";
import { Search } from "mdx/mdx-random-page";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <HeaderPartClient />
      <SearchPartClient />
      <div className="prose">
        <Search.default />
      </div>
    </Fragment>
  );
}
