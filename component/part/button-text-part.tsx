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
      <button className="btn-text">{children}</button>
    </Link>
  );
}
