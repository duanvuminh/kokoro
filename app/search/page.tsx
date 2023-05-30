import { HeaderPartClient, SearchPartClient } from "component/part-client";
import { Search } from "mdx/mdx-random-page";

export default function Page() {
  return (
    <div className="p-2">
      <HeaderPartClient />
      <SearchPartClient />
      <div className="prose max-w-4xl">
        <Search.default />
      </div>
    </div>
  );
}
