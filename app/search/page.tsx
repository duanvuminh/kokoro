import { HeaderPartClient, SearchPartClient } from "component/part-client";
import { Search } from "mdx/mdx-random-page";
import { Fragment } from "react";

export default function Page() {
  return (
      <div className="max-w-2xl mx-auto sm:mt-10">
        <HeaderPartClient />
        <SearchPartClient />
        <div className="prose">
          <Search.default />
        </div>
      </div>
  );
}
