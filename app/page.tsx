import { TabPartClient } from "component/part-client";
import { SearchPartClient, TongleMenuPartClient } from "component/part-client";
import { generateMetadataHomePage } from "lib/util";
import { Fragment } from "react";

export const metadata = generateMetadataHomePage;

export default function Page() {
  return (
    <Fragment>
      <TongleMenuPartClient />
      <SearchPartClient />
      <TabPartClient/>
    </Fragment>
  );
}
