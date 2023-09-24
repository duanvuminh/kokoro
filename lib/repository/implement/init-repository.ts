import { injectable } from "inversify";
import { IInitRepository, indexAngolia } from "lib/repository";

@injectable()
export class InitRepository implements IInitRepository {
  init(): void {
    // const saveObject = { objectID: "query", mean: "result" };
    // indexAngolia.mean.saveObject([saveObject]);
  }
  
}
