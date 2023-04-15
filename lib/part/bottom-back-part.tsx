import Link from "next/link";
export function BottomBackPart(): JSX.Element {
  return (
    <Link href="/" prefetch={false}>
      ← Back to home
    </Link>
  );
}
