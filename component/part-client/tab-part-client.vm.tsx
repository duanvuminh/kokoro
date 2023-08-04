import { level_local_storage } from "lib/const/app-text-client-const";
import { useAppContext } from "./context/app-context";

export function TabPartClientHook() {
  const { level, setLevel } = useAppContext();
  const selectTab = (index: number) => {
    setLevel!(index);
    localStorage.setItem(level_local_storage, index.toString());
  };
  return {
    selectTab,
    level,
  };
}
