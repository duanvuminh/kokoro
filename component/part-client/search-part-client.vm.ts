import { kanji, mean } from "lib/const";
import { paths } from "@/mdx/mdx-kanji";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [state, setState] = useState({
    hasFocus: false,
    value: { id: "", path: "mean" },
  });

  const onBlur = () => setState({ ...state, hasFocus: false });
  const onFocus = () => setState({ ...state, hasFocus: true });
  let onSelect = (selectedItem: any) => {
    if (selectedItem == undefined) return;
    if (state.value.id != selectedItem.id) {
      setState({ ...state, value: selectedItem });
    }
  };
  useEffect(() => {
    router.prefetch(`mean/完了`);
  }, []);

  useEffect(() => {
    if (state.value.id != "") {
      router.push(`${state.value.path}/${state.value.id}`);
    }
  }, [state.value]);

  return {
    onBlur,
    onFocus,
    onSelect,
    state
  };
}

export function SearchPartClientHook() {
  return {
    maxItems,
    listbox,
    ...state(),
  };
}
