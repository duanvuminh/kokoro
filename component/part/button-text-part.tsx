import Link from "next/link";
import { ReactNode } from "react";

export function ButtonTextPart({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}): JSX.Element {
  const cusClassName = className || "";
  const cusAriaLabel = ariaLabel || "";
  return (
    <Link href={href}>
      <button className={`btn-text ${cusClassName}`} aria-label={cusAriaLabel}>
        {children}
      </button>
    </Link>
  );
}
