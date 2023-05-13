import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import type {
  ITranslateRepository,
} from "lib/repository";
import { TYPES, mean } from "lib/type";
import type { Metadata } from "next";

const translateRepo = myContainer.get<ITranslateRepository>(TYPES.ITranslateRepository);

export const generateMetadata = ({
  params: { id },
}: {
  params: { id: string };
}): Metadata => {
  const pageId = decodeURIComponent(id);
  return {
    title: `${pageId} ${mean}` ,
    description: mean,
  };
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const pageId = decodeURIComponent(id);
  const content = await translateRepo.getTranslate(pageId);
  console.log(content);
  return (
    <div className="prose">
      <p>{pageId}</p>
      <p>{content}</p>
    </div>
  );
}
