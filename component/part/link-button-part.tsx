import Link from "next/link";
import { ReactNode } from "react";

export function LinkButtonPart({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href}>
      <button
        type="button"
        className="font-medium text-sm px-5 py-2.5 text-center"
      >
        {children}
      </button>
    </Link>
  );
}
