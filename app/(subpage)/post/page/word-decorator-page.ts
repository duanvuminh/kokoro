import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPracticePage as BasePostPracticePage } from "app/(subpage)/post/page";
import type { IPostPage } from "app/(subpage)/post/page";

@injectable()
export class WordDecoratorPage extends BasePostPracticePage {
  constructor(
    @inject(TYPES.WordRepository)
    post: IPostPage
  ) {
    super(post);
  }
}
