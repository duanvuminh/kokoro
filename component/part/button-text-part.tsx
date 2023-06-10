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
    <Link href={href} className={cusClassName}>
      <button className="btn-text" aria-label={cusAriaLabel}>
        {children}
      </button>
    </Link>
  );
}
