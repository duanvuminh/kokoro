import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListModel } from "app/(subpage)/post/views";
import type { IPostRepository } from "app/(subpage)/post/views";

@injectable()
export class KanjiListDecoratorRepository extends BasePostTypeListModel {
  constructor(
    @inject(TYPES.KanjiListRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
