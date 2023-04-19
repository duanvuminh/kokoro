import Link from "next/link";
import { LinkButtonPart } from "component/part";
export function BottomBackPart(): JSX.Element {
  return (
    <footer>
      <LinkButtonPart href="/">← Back to home</LinkButtonPart>
    </footer>
  );
}
