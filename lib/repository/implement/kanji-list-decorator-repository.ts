import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListModel } from "lib/model";
import { type IPostModel } from "lib/repository";

@injectable()
export class KanjiListDecoratorRepository extends BasePostTypeListModel {
  constructor(
    @inject(TYPES.KanjiListRepository)
    post: IPostModel
  ) {
    super(post);
  }
}
