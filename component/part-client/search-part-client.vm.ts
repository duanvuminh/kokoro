import { useState } from "react";
import { useRouter } from "next/navigation";
import { ISearh, kanji } from "lib/type";
import { paths } from "mdx/mdx-post-content";

// The maximum number of items we want to show in the list
const maxItems = 10;

// Set up listbox contents. We are fetching cities and airports from two different
// API endpoints. 10 from each but ideally we only want to show 8 cities and 2 airports.
const listbox = [
  {
    id: "1",
    name: kanji,
    ratio: 8,
    displayField: "id",
    data: (query: string) => {
      if (paths.find((item) => item == query))
        return [{ id: query, path: "post" }];
    },
    searchType: "startswith",
  },
];

export function state() {
  const router = useRouter();
  const [hasFocus, setHasFocus] = useState(false);

  // Style the container so on mobile devices the search box and results
  // take up the whole screen
  const containerStyles = hasFocus
    ? "fixed block w-full h-full top-0 left-0 bg-white z-50 overflow-auto sm:h-auto sm:top-auto sm:left-auto sm:bg-transparent sm:z-auto sm:overflow-visible sm:relative"
    : "relative";

  const iconDisplayStyle = hasFocus
    ? "hidden text-crystal-600"
    : "inline-flex text-oldsilver-400";

  const onBlur = () => setHasFocus(false);
  const onFocus = () => setHasFocus(true);
  const onSelect = (selectedItem: any) => {
    if (selectedItem == undefined) return;
    router.push(`${selectedItem.path}/${selectedItem.id}`);
  };

  return {
    onBlur,
    onFocus,
    onSelect,
    containerStyles,
    iconDisplayStyle,
  };
}

export const vmSearchPartClient = {
  maxItems,
  listbox,
  state,
};
