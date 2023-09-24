import { injectable } from "inversify";
import { IInitRepository, indexAngolia } from "lib/repository";
@injectable()
export class InitRepository implements IInitRepository {
  init({ postType, id }: { postType: string; id: string }): void {
    // const saveObject = { objectID: id, level: "n5" };
    // if (postType == "kanji" || postType == "mean")
    //   indexAngolia[postType as keyof typeof indexAngolia].partialUpdateObjects(
    //     [saveObject],
    //     {
    //       createIfNotExists: true,
    //     }
    //   );
  }
}
