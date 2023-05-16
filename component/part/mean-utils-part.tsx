import { myContainer } from "@/inversify.config";
import { IMeanRepository } from "@/lib/repository";
import { TYPES } from "@/lib/type";

const meanRepo = myContainer.get<IMeanRepository>(TYPES.IMeanRepository);

export async function MeanUtilsPart({ pageId }: { pageId: string }): JSX.Element {
  const content = await meanRepo.getMean(pageId);
  return (
    <p>
      {content}
    </p>
  );
}
