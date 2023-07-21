import { GoogleLoginPartClient, useAppContext } from "component/part-client";
import { Fragment } from "react";
import { logout } from "lib/const";
import { auth } from "lib/repository";
export function MyPagePartClient() {
  const { token } = useAppContext();
  const onClickLogout = ()=>{
    auth.signOut();
  }
  return token == "" ? (
    <Fragment>
      <GoogleLoginPartClient />
    </Fragment>
  ) : (
    <button className="btn-text" aria-label="login" onClick={onClickLogout}>
      {logout}
    </button>
  );
}
