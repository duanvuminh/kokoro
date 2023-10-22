import { UserSettingService } from "lib/service/user-setting-service";
import { useAppContext } from "./context/app-context";

export function TabPartClientHook() {
  const { level, setLevel } = useAppContext();
  const selectTab = (index: number) => {
    setLevel!(index);
    UserSettingService.setLevel(index);
  };
  return {
    selectTab,
    level,
  };
}
