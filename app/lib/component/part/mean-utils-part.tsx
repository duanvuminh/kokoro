import { myContainer } from "inversify.config";
import { IMeanRepository } from "app/lib/repository";
import { TYPES } from "app/lib/const";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}):Promise<JSX.Element> {
  const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);
  const content = await meanRepo.getMean(pageId);
  return <p>{content}</p>;
}
