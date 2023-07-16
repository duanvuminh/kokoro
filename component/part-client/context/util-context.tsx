import { Fragment, useEffect } from "react";
import { useSearch } from "./app-context";

export function TongleMenuPartClient({ value }: { value: boolean }) {
    const { toggleSearchPage } = useSearch();
    useEffect(() => {
      toggleSearchPage!(value);
      return () => toggleSearchPage!(!value);
    }, []);
  
    return <Fragment />;
  }
  
  export function SetLoginPartClient({ value }: { value: boolean }) {
    const { setLoginPage } = useSearch();
    useEffect(() => {
      setLoginPage!(value);
      return () => setLoginPage!(!value);
    }, []);
  
    return <Fragment />;
  }