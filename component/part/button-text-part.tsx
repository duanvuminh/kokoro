import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "component/part-client";

export function ButtonTextPart({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link href={href} prefetch={false}>
      <Button variant="text">{children}</Button>
    </Link>
  );
}
