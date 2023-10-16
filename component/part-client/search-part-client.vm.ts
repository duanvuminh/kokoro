import { kyomoGetPostData } from "lib/repository/api/api_server";
import { kanji, mean } from "lib/const/app-text-client-const";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const maxItems = 2;

const listbox = [
  {
    id: "kanji",
    name: kanji,
    ratio: 1,
    displayField: "id",
    data: (query: string) =>
      kyomoGetPostData(`/api/kanji-search?kanji=${query}`).then(
        (search) => search.result
      ),
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

export function SearchPartClientHook() {
  const router = useRouter();
  const [state, setState] = useState({
    hasFocus: false,
    value: { id: "", path: "post/mean" },
  });

  const onBlur = () => {
    return setState({ ...state, hasFocus: false });
  };
  const onFocus = () => {
    return setState({ ...state, hasFocus: true });
  };
  let onSelect = (selectedItem: any) => {
    if (selectedItem == undefined) return;
    if (state.value.id != selectedItem.id) {
      setState({ ...state, value: selectedItem, hasFocus: false });
    }
  };
  useEffect(() => {
    if (state.value.id != "") {
      router.push(`/${state.value.path}/${state.value.id}`);
    }
  }, [state.value]);

  return {
    maxItems,
    listbox,
    onBlur,
    onFocus,
    onSelect,
    state,
  };
}
