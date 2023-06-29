"use server";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IMeanRepository } from "lib/repository";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}): Promise<JSX.Element> {
  const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);
  const content = await meanRepo.getMean(pageId);
  return <p>{content}</p>;
}
