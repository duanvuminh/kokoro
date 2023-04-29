import Link from "next/link";
import { ReactNode } from "react";

export function ButtonTextPart({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}): JSX.Element {
  const cusClassName = className || "";
  return (
    <Link href={href}>
      <button className={`btn-text ${cusClassName}`}>{children}</button>
    </Link>
  );
}
