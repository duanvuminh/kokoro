import { siteName } from "lib/const";
import Link from "next/link";

export function LogoPart({ dense }: { dense: boolean }) {
  const cusClass = dense
    ? "leaading-none px-3 text-rose-600 text-4xl sm:h-28 sm:text-6xl"
    : "leaading-none px-3 text-rose-600 text-4xl sm:h-8 sm:text-6xl";
  return (
    <p>
      <Link href="/">
        <button className={cusClass}>
          {siteName}
        </button>
      </Link>
      <small>も頑張れ！</small>
    </p>
  );
}
