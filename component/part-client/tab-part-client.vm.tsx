import { useState } from "react";

export function TabPartClientHook() {
  const [state, setState] = useState({
    index: 0,
  });
  const selectTab = (index: number) => setState({ index: index });
  return {
    selectTab,
    state,
  };
}
