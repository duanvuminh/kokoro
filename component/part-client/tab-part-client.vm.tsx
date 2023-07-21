import { useAppContext } from "./context/app-context";

export function TabPartClientHook() {
  const { level,setLevel } = useAppContext();
  const selectTab = (index: number) => {
    setLevel!(index);
  }
  return {
    selectTab,
    level,
  };
}
