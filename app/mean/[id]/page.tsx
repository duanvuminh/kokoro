import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import type {
  IMeanRepository,
} from "lib/repository";
import { TYPES, translate } from "lib/type";
import type { Metadata } from "next";

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

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const pageId = decodeURIComponent(id);
  const content = await meanRepo.getMean(pageId);
  console.log(content);
  return (
    <div className="prose">
      <h2>{pageId}</h2>
      <p>{content}</p>
    </div>
  );
}
