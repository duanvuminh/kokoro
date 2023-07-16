import { login } from "lib/const";
import Link from "next/link";
import { useSearch } from "./context/app-context";
import { MenuIconEmptyPart } from "component/part";
import { auth } from "lib/repository";

export function LoginButtonPart(): JSX.Element {
  const { isLoginPage } = useSearch();
  return isLoginPage ? (
    <MenuIconEmptyPart />
  ) : <LoginButtonSubPart/>;
}

function LoginButtonSubPart(){
  const { token,setToken } = useSearch();
  const logout = () => {
    auth.signOut();
    setToken!("");
  }
  return token!=""?(
    <button className="btn-text" aria-label="login" onClick={logout}>
      Logout
    </button>
):(
  <Link href="/login">
    <button className="btn-text" aria-label="login">
      {login}
    </button>
  </Link>
);
}
