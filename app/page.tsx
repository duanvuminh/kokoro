import { TabPartClient } from "component/part-client";
import { SearchPartClient, DisplayHeaderCloseButtonPartClient } from "component/part-client";
import { generateMetadataHomePage } from "lib/util";
import { Fragment } from "react";

export const metadata = generateMetadataHomePage;

export default function Page() {
  return (
    <Fragment>
      <DisplayHeaderCloseButtonPartClient value={true} />
      <SearchPartClient />
      <TabPartClient/>
    </Fragment>
  );
}
