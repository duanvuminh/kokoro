import { LoginButtonPart, LogoPart } from "app/component/part";
import { MenuIconPartClient } from "app/component/part-client";

export function HeaderPart({dense}:{dense:boolean}): JSX.Element {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between sticky top-0 bg-white items-start">
        <MenuIconPartClient />
        <LogoPart dense={dense}/>
        <LoginButtonPart />
      </nav>
    </header>
  );
}
