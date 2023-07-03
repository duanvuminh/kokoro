"use server";
import Loading from "app/loading";
import { Fragment } from "react";
import { Suspense } from "react";
import { MeanUtilsPart } from "component/part";
import { MeanUtilsPartClient } from "component/part-client";
import { hantuListConst, translate } from "lib/const";
import Link from "next/link";

type Props = {
  pageId: string;
  postType: string;
};

export async function MeanRepositoryPart({
  pageId,
  postType,
}: Props): Promise<JSX.Element> {
  if (pageId == undefined || postType == undefined) return <Fragment />;
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
      <h3>{hantu}</h3>
      <Suspense fallback={<Loading />} key={pageId}>
        <MeanUtilsPart pageId={pageId} />
      </Suspense>
      <MeanUtilsPartClient pageId={pageId} />
    </div>
  );
}
