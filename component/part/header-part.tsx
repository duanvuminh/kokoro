import { LoginButtonPart, LogoPart } from "component/part";
import { MenuIconPartClient } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between sticky top-0 bg-white items-start">
        <MenuIconPartClient />
        <LogoPart />
        <LoginButtonPart />
      </nav>
    </header>
  );
}
