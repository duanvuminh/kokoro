import { login } from "lib/const";
import Link from "next/link";
import { useSearch } from "./context/app-context";
import { MenuIconEmptyPart } from "component/part";

export function LoginButtonPart(): JSX.Element {
  const { isLoginPage } = useSearch();
  return isLoginPage ? (
    <MenuIconEmptyPart />
  ) : (
    <Link href="/login">
      <button className="btn-text" aria-label="login">
        {login}
      </button>
    </Link>
  );
}
