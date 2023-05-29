import { HeaderPartClient, SearchPartClient } from "component/part-client";
import { Search } from "mdx/mdx-random-page";

export default function Page() {
  return (
    <div>
      <HeaderPartClient />
      <SearchPartClient />
      <div className="prose block">
        <Search.default />
      </div>
    </div>
  );
}
