import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPracticeModel } from "lib/model";
import { type IPostRepository } from "lib/repository";

@injectable()
export class KanjiDecoratorRepository extends BasePostPracticeModel {
  constructor(
    @inject(TYPES.KanjiRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
