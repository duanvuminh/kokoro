import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListPage } from "app/(subpage)/post/page";
import type { IPostPage } from "app/(subpage)/post/page";

@injectable()
export class KanjiListDecoratorPage extends BasePostTypeListPage {
  constructor(
    @inject(TYPES.KanjiListRepository)
    post: IPostPage
  ) {
    super(post);
  }
}
