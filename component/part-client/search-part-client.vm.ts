import { hantuListConst, kanji, mean } from "lib/const";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const maxItems = 2;

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
      return [{ id: query, path: "post/mean" }];
    },
    searchType: "contains",
  },
];

function _state() {
  const router = useRouter();
  const [state, setState] = useState({
    hasFocus: false,
    value: { id: "", path: "post/mean" },
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
      router.push(`/${state.value.path}/${state.value.id}`);
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
    ..._state(),
  };
}
