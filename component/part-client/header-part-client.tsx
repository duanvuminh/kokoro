import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonTextPart, MenuIconEmptyPart } from "component/part";
import { useSearch } from "component/part-client";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export function TongleMenuPartClient() {
  const { toggleSearchPage } = useSearch();
  useEffect(() => {
    toggleSearchPage!(true);
    return () => toggleSearchPage!(false);
  }, []);

  return <Fragment />;
}
1;
export function MenuIconPartClient(): JSX.Element {
  const router = useRouter();
  const { isSearchPage } = useSearch();
  return isSearchPage ? (
    <MenuIconEmptyPart />
  ) : (
    <ButtonTextPart href="#" ariaLabel="tìm kiếm" className="md:invisible">
      <XMarkIcon
        className="block h-6 w-6"
        aria-hidden="true"
        onClick={() => router.back()}
      />
    </ButtonTextPart>
  );
}
