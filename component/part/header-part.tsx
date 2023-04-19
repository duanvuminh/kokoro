import Link from "next/link";
import { LogoPart } from "component/part";
import { ClosekPart } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <nav className="flex justify-between items-center mx-auto">
      <div className="flex items-center">
        <LogoPart />
      </div>
      <div className="flex items-center mr-3">
        <ClosekPart />
      </div>
    </nav>
  );
}
