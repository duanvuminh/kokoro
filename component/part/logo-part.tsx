import { siteName } from "lib/app/const/app-text-const";
import Link from "next/link";

export function LogoPart({ dense }: { dense: boolean }) {
  const cusClass = !dense
    ? "leaading-none px-3 text-rose-600 text-4xl sm:h-28 sm:text-6xl"
    : "leaading-none px-3 text-rose-600 text-4xl sm:h-12 sm:text-5xl";
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
