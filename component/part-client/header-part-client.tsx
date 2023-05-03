import { useSearch } from "component/part-client";
import { useRouter } from "next/navigation";
import { useEffect, Fragment } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonTextPart } from "component/part";

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

  return isSearchPage ? (
    <button className="btn-text" onClick={onClick} aria-label="quay lại">
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    </button>
  ) : (
    <ButtonTextPart href="/search" ariaLabel="tìm kiếm">
      <MagnifyingGlassIcon className="block h-6 w-6" aria-hidden="true" />
    </ButtonTextPart>
  );
}
