import { SearchPartClient, TongleMenuPartClient } from "component/part-client";
import { generateMetadataHomePage } from "lib/util";
import { Search } from "mdx/mdx-random-page";
import { Fragment } from "react";

export const metadata = generateMetadataHomePage;

export default function Page() {
  return (
    <Fragment>
      <TongleMenuPartClient />
      <SearchPartClient />
      <div className="prose">
        <Search.default />
      </div>
    </Fragment>
  );
}
