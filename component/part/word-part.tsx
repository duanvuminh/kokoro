import Loading from "app/loading";
import { MeanUtilsPart } from "component/part";
import { hantuListConst } from "lib/const";
import Link from "next/link";
import { Suspense } from "react";

export function WordPart({
  params: { pageId },
}: {
  params: { pageId: string };
}): JSX.Element {
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
    </div>
  );
}
