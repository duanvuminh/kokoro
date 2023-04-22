import Link from "next/link";
import { ReactNode } from "react";

export function ButtonTextPart({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link href={href} prefetch={false}>
      <button type="button" className="px-5 py-2.5 text-center">
        {children}
      </button>
    </Link>
  );
}
