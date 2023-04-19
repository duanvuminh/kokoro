import Link from "next/link";
import { LogoPart } from "component/part";
import { ClosekPart } from "component/part-client";

export function HeaderPart(): JSX.Element {
  return (
    <nav className="flex justify-between items-center mx-auto">
      <LogoPart className="flex items-center" />
      <ClosekPart className="flex items-center" />
    </nav>
  );
}
