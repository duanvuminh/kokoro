import { LogoPart, MenuIconEmptyPart } from "component/part";
import { MenuIconPartClient } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-white">
      <MenuIconPartClient />
      <LogoPart />
      <MenuIconEmptyPart />
    </nav>
  );
}
