import { injectable } from "inversify";
import { IInitService } from "lib/service";
@injectable()
export class InitRepository implements IInitService {
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
