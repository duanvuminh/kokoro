import { siteName } from "lib/const";
import Link from "next/link";

export function LogoPart() {
  return (
    <p>
      <Link href="/">
        <button className="leaading-none px-3 text-rose-600 text-4xl sm:h-28 sm:text-6xl">
          {siteName}
        </button>
      </Link>
      <small>も頑張れ！</small>
    </p>
  );
}
