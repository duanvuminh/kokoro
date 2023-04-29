import { SiteName } from "lib/type";
import Link from "next/link";

export function LogoPart() {
  return (
    <p>
      <Link href="/">
        <button className="leaading-none px-3 text-rose-600 text-4xl">{SiteName}</button>
      </Link>
      <small>も頑張れ！</small>
    </p>
  );
}
