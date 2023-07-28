import { HeaderPart } from "component/part";
import { Fragment } from "react";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <Fragment>
      <HeaderPart dense={false}/>
      <main className="max-w-2xl p-2 sm:p-0 sm:mt-5 mx-auto">{children}</main>
    </Fragment>
  );
}
