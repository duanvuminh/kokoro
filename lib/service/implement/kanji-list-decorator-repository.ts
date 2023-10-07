import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListModel } from "lib/model";
import { type IPostRepository } from "lib/service";

@injectable()
export class KanjiListDecoratorRepository extends BasePostTypeListModel {
  constructor(
    @inject(TYPES.KanjiListRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
