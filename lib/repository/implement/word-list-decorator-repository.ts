import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListModel } from "lib/model";
import { type IPostModel } from "lib/repository";

@injectable()
export class WordListDecoratorRepository extends BasePostTypeListModel {
    constructor(
        @inject(TYPES.WordListRepository)
        post: IPostModel
      ) {
        super(post);
      }
}