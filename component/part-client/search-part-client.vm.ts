import { hantuListConst, kanji, mean } from "lib/const";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

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
      if (hantuListConst[query] != null)
        return [{ id: query, path: "post/kanji" }];
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
  const [isPending, startTransition] = useTransition();
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
    if (state.value.id != "") {
      startTransition(() =>
        router.push(`/${state.value.path}/${state.value.id}`)
      );
    }
  }, [state.value]);

  return {
    onBlur,
    onFocus,
    onSelect,
    state,
    isPending
  };
}

export function SearchPartClientHook() {
  return {
    maxItems,
    listbox,
    ...state(),
  };
}
