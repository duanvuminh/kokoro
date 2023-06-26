import Loading from "app/loading";
import { MeanUtilsPart } from "app/lib/component/part";
import { MeanUtilsPartClient } from "app/lib/component/part-client";
import { hantuListConst, translate } from "app/lib/const";
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

export default function Page({ params: { id } }: { params: { id: string } }) {
  const pageId = decodeURIComponent(id);
  const chars = [...pageId];
  const hantu = chars.map((c, i) => hantuListConst[c]?.hantu).join(" ");
  return (
    <div className="prose">
      <h2>
        {chars.map((c, i) => (
          <Link href={`/post/kanji/${c}`} key={i}>
            {c}
          </Link>
        ))}
      </h2>
      <h3>
        {hantu}
      </h3>
      <Suspense fallback={<Loading />} key={pageId}>
        <MeanUtilsPart pageId={pageId} />
      </Suspense>
      <MeanUtilsPartClient pageId={pageId} />
    </div>
  );
}
