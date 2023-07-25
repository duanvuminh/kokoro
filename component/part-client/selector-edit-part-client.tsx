import { auth } from "lib/repository";
import { Fragment } from "react";
import { useAppContext } from "./context/app-context";

export function SelectorEditPartClient({
  user,
  admin,
}: {
  user: any;
  admin: any;
}) {
  const { token } = useAppContext();
  const email = auth.currentUser?.email ?? "";
  console.log(email);
  if (token== "" || email == "") return <Fragment />;
  if (email != "duanvuminh@gmail.com") return <Fragment>{user}</Fragment>;
  return <Fragment>{admin}</Fragment>;
}
