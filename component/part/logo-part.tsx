import { SiteName } from "lib/type";
import Link from "next/link";

export function LogoPart() {
  return (
    <p>
      <Link href="/" prefetch={false}>
        <span className="leaading-none text-rose-600 text-4xl">{SiteName}</span>
      </Link>
      <sub>も頑張れ！</sub>
    </p>
  );
}
