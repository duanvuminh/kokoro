import { MyPagePartClient } from "component/part-client";

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
  return <MyPagePartClient/>
}
