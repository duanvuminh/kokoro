import { myContainer } from "inversify.config";
import { IMeanRepository } from "lib/repository";
import { TYPES } from "lib/type";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}): JSX.Element {
  const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);
  const content = await meanRepo.getMean(pageId);
  return <p>{content}</p>;
}
