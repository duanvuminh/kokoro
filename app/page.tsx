import { DisplayHeaderCloseButtonPartClient, HomePartClient, SearchPartClient } from "component/part-client";
import { generateMetadataHomePage } from "lib/util";
import { Fragment } from "react";

export const metadata = generateMetadataHomePage;

export default function Page() {
  return (
    <Fragment>
      <DisplayHeaderCloseButtonPartClient value={true} />
      <SearchPartClient />
      <HomePartClient/>
    </Fragment>
  );
}
