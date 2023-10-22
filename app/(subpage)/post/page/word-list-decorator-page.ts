import { inject, injectable, targetName } from "inversify";
import { TYPES } from "lib/const";
import { BasePostTypeListPage } from "app/(subpage)/post/page";
import type { IPostPage } from "app/(subpage)/post/page";

@injectable()
export class WordListDecoratorPage extends BasePostTypeListPage {
  constructor(
    @inject(TYPES.WordListRepository)
    post: IPostPage
  ) {
    super(post);
  }
}
