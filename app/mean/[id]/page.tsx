import Loading from "app/loading";
import { MeanUtilsPartClient } from "component/part-client";
import { MeanUtilsPart } from "component/part";
import { myContainer } from "inversify.config";
import type { IMeanRepository } from "lib/repository";
import { TYPES, translate } from "lib/type";
import type { Metadata } from "next";
import { Suspense } from "react";

const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);

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
  return (
    <div className="prose">
      <h2>{pageId}</h2>
      <Suspense fallback={<Loading/>}>
        <MeanUtilsPart pageId={pageId} />
      </Suspense>
      <MeanUtilsPartClient pageId={pageId} />
    </div>
  );
}
