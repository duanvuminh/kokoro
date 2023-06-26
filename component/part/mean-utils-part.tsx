import { myContainer } from "inversify.config";
import { IMeanRepository } from "lib/repository";
import { TYPES } from "lib/const";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}):Promise<JSX.Element> {
  const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);
  const content = await meanRepo.getMean(pageId);
  return <p>{content}</p>;
}
