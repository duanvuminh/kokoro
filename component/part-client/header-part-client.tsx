import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonTextPart, MenuIconEmptyPart } from "component/part";
import { useAppContext } from "component/part-client";

export function MenuIconPartClient(): JSX.Element {
  const { isSearchPage } = useAppContext();
  return isSearchPage ? (
    <MenuIconEmptyPart />
  ) : (
    <ButtonTextPart href="/" ariaLabel="tìm kiếm" className="sm:invisible">
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    </ButtonTextPart>
  );
}
