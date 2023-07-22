import { auth } from "lib/repository";
import { Fragment } from "react";

export function SelectorEditPartClient({
  children1,
  children2,
}: {
  children1: any;
  children2: any;
}) {
  const email = auth.currentUser?.email ?? "";
  if (email == "") return <Fragment />;
  if (email != "duanvuminh@gmail.com") return <Fragment>{children1}</Fragment>;
  return <Fragment>{children2}</Fragment>;
}
