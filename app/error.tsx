"use client";

import { serverError } from "lib/const/app-text-const";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  return (
    <div>
      <h2>{serverError}</h2>
      <button onClick={() => router.refresh()}>Try again</button>
    </div>
  );
}
