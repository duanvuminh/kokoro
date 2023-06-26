import { TabPartClient } from "app/lib/component/part-client";
import { SearchPartClient, TongleMenuPartClient } from "app/lib/component/part-client";
import { generateMetadataHomePage } from "app/lib/util";
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
