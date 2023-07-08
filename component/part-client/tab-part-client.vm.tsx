import { useSearch } from "./context/app-context";

export function TabPartClientHook() {
  const { level,setLevel } = useSearch();
  const selectTab = (index: number) => setLevel!(index);
  return {
    selectTab,
    level,
  };
}
