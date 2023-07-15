import { LogoPart } from "component/part";
import { LoginButtonPart, MenuIconPartClient } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between sticky top-0 bg-white">
        <MenuIconPartClient />
        <LogoPart />
        <LoginButtonPart />
      </nav>
    </header>
  );
}
