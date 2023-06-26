import { LogoPart, MenuIconEmptyPart } from "app/lib/component/part";
import { MenuIconPartClient } from "app/lib/component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between sticky top-0 bg-white">
        <MenuIconPartClient />
        <LogoPart />
        <MenuIconEmptyPart />
      </nav>
    </header>
  );
}
