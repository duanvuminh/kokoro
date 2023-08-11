import { UserSettingRepository } from "lib/repository/user-setting-repository";
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
