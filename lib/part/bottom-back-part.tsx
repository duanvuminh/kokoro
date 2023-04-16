import Link from "next/link";
export function BottomBackPart(): JSX.Element {
  return (
    <footer>
      <Link href="/" prefetch={false}>
        ← Back to home
      </Link>
    </footer>
  );
}
