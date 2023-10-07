import { UserSettingRepository } from "lib/service/user-setting-repository";
import { useAppContext } from "./context/app-context";

export function TabPartClientHook() {
  const { level, setLevel } = useAppContext();
  const selectTab = (index: number) => {
    setLevel!(index);
    UserSettingRepository.setLevel(index);
  };
  return {
    selectTab,
    level,
  };
}
