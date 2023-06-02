import Loading from "app/loading";
import { MeanUtilsPart } from "component/part";
import { MeanUtilsPartClient } from "component/part-client";
import { translate } from "lib/const";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const generateMetadata = ({
  params: { id },
}: {
  params: { id: string };
}): Metadata => {
  const pageId = decodeURIComponent(id);
  return {
    title: `${pageId} ${translate}`,
    description: translate,
  };
};

export default function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const pageId = decodeURIComponent(id);
  const chars = [...pageId];
  return (
    <div className="prose">
      <h2>
        {
          chars.map((c,i) => <Link href={`post/kanji/${c}`} key={i}>{c}</Link>)
        }
      </h2>
      <Suspense fallback={<Loading/>}>
        <MeanUtilsPart pageId={pageId} />
      </Suspense>
      <MeanUtilsPartClient pageId={pageId} />
    </div>
  );
}
