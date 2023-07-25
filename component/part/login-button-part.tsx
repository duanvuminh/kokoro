import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function LoginButtonPart(): JSX.Element {
  return (
    <Link href="/my-page">
      <button className="btn-text" aria-label="login">
        <Cog8ToothIcon className="block h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  );
}
