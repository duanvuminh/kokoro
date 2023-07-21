import { login } from "lib/const";
import Link from "next/link";

export function LoginButtonPart(): JSX.Element {
  return (
    <Link href="/my-page">
      <button className="btn-text" aria-label="login">
        {login}
      </button>
    </Link>
  );
}
