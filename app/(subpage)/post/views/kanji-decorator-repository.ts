import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPracticeModel } from "app/(subpage)/post/views";
import type { IPostRepository } from "app/(subpage)/post/views";
@injectable()
export class KanjiDecoratorRepository extends BasePostPracticeModel {
  constructor(
    @inject(TYPES.KanjiRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
