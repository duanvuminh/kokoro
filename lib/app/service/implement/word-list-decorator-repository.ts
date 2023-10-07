import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/app/const";
import { BasePostTypeListModel } from "lib/model";
import { type IPostRepository } from "lib/app/service";

@injectable()
export class WordListDecoratorRepository extends BasePostTypeListModel {
    constructor(
        @inject(TYPES.WordListRepository)
        post: IPostRepository
      ) {
        super(post);
      }
}