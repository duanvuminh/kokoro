import { kanji, mean } from "lib/const";
import { paths } from "mdx/mdx-post-content";
import { useRouter } from "next/navigation";
import { useState } from "react";

// The maximum number of items we want to show in the list
const maxItems = 2;

// Set up listbox contents. We are fetching cities and airports from two different
// API endpoints. 10 from each but ideally we only want to show 8 cities and 2 airports.
const listbox = [
  {
    id: "kanji",
    name: kanji,
    ratio: 1,
    displayField: "id",
    data: (query: string) => {
      if (paths.find((item) => item == query))
        return [{ id: query, path: "post" }];
      return [];
    },
    searchType: "contains",
  },
  {
    id: "mean",
    name: mean,
    ratio: 1,
    displayField: "id",
    data: (query: string) => {
      if (query.length == 1) return [];
      return [{ id: query, path: "mean" }];
    },
    searchType: "contains",
  },
];

export function state() {
  const router = useRouter();
  const [state, setState] = useState({ hasFocus: false, value: "" });
  let value = {};
  // Style the container so on mobile devices the search box and results
  // take up the whole screen
  const containerStyles = state.hasFocus
    ? "fixed block w-full h-full top-15 left-0 bg-white z-50 overflow-auto sm:h-auto sm:top-auto sm:left-auto sm:bg-transparent sm:z-auto sm:overflow-visible sm:relative"
    : "relative";

  const iconDisplayStyle = state.hasFocus
    ? "hidden text-crystal-600"
    : "inline-flex text-oldsilver-400";

  const onBlur = () => setState({ ...state, hasFocus: false });
  const onFocus = () => setState({ ...state, hasFocus: true });
  let onSelect = (selectedItem: any) => {
    console.log(1111111);
    if (selectedItem == undefined) return;
    if (selectedItem.id != state.value) {
      setState({ ...state, value: selectedItem.id });
      if (selectedItem) router.push(`${selectedItem.path}/${selectedItem.id}`);
    }
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
