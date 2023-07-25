import { Fragment, useEffect } from "react";
import { useAppContext } from "./app-context";

export function DisplayHeaderCloseButtonPartClient({ value }: { value: boolean }) {
  const { setShowCloseButton } = useAppContext();
  useEffect(() => {
    setShowCloseButton!(value);
    return () => setShowCloseButton!(!value);
  }, []);
  return <Fragment />;
}
