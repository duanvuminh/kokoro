import { HeaderPart } from "app/component/part";
import {
  DisplayHeaderCloseButtonPartClient,
  HomePartClient,
  SearchPartClient,
} from "app/component/part-client";
import { generateMetadataHomePage } from "lib/util";
import { Fragment } from "react";

export const metadata = generateMetadataHomePage;

export default function Page() {
  return (
    <Fragment>
      <HeaderPart dense={false} />
      <main className="max-w-2xl p-2 sm:p-0 sm:mt-5 mx-auto">
        <DisplayHeaderCloseButtonPartClient value={true} />
        <SearchPartClient />
        <HomePartClient />
      </main>
    </Fragment>
  );
}
