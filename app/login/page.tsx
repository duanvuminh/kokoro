import { GoogleLoginPartClient } from "component/part-client";
import { googleLogin } from "lib/const";
import { Fragment } from "react";
import { SetLoginPartClient } from "component/part-client";

export const metadata = {
  title: "kyo login",
  keywords: ["kyo login", "đăng nhập"],
  description: "login ",
  openGraph: {
    title: "kyo login",
    description: "kyo login",
    url: "https://kyomo.vercel.app/login",
    siteName: "Kokoro",
    type: "website",
  },
};

export default function Page() {
  return (
    <Fragment>
      <SetLoginPartClient value={true} />
      <GoogleLoginPartClient>{googleLogin}</GoogleLoginPartClient>
    </Fragment>
  );
}
