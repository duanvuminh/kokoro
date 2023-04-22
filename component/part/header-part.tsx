import { LogoPart } from "component/part";
import { ClosePart } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <nav className=" flex justify-between items-center mx-auto bg-white sticky top-0">
      <div className="flex items-center">
        <LogoPart />
      </div>
      <div className="flex items-center mr-3">
        <ClosePart />
      </div>
    </nav>
  );
}
