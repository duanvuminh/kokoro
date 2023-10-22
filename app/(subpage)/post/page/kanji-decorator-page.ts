import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPracticePage } from "app/(subpage)/post/page";
import type { IPostPage } from "app/(subpage)/post/page";
@injectable()
export class KanjiDecoratorPage extends BasePostPracticePage {
  constructor(
    @inject(TYPES.KanjiRepository)
    post: IPostPage
  ) {
    super(post);
  }
}
