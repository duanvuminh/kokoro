import { Fragment, useEffect } from "react";
import { useAppContext } from "./app-context";

export function TongleMenuPartClient({ value }: { value: boolean }) {
  const { toggleSearchPage } = useAppContext();
  useEffect(() => {
    toggleSearchPage!(value);
    return () => toggleSearchPage!(!value);
  }, []);
  return <Fragment />;
}
