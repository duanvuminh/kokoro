import { MyPagePartClient } from "app/component/part-client";

export const metadata = {
  title: "kyo login",
  keywords: ["kyo login", "đăng nhập"],
  description: "login ",
  openGraph: {
    title: "kyo login",
    description: "kyo login",
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/login`,
    siteName: "Kokoro",
    type: "website",
  },
};

export default function Page() {
  return <MyPagePartClient/>
}
