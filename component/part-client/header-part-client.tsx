import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonTextPart } from "component/part";
import { useSearch } from "component/part-client";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export function HeaderPartClient() {
  const { toggleSearchPage } = useSearch();
  useEffect(() => {
    toggleSearchPage!(true);
    return () => toggleSearchPage!(false);
  }, []);

  return <Fragment />;
}

export function MenuIconPartClient(): JSX.Element {
  const router = useRouter();
  const { isSearchPage } = useSearch();

  const onClick = (event: { target: any }) => {
    router.back();
  };
  useEffect(()=>{
    router.prefetch("/search");
  },[]);
  return isSearchPage ? (
    <button className="btn-text" onClick={onClick} aria-label="quay lại">
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    </button>
  ) : (
    <ButtonTextPart href="/search" ariaLabel="tìm kiếm">
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    </ButtonTextPart>
  );
}
