import { inject, injectable } from "inversify";
import { TYPES } from "lib/app/const";
import { BasePostPracticeModel } from "lib/model";
import { type IPostRepository } from "lib/app/service";

@injectable()
export class KanjiDecoratorRepository extends BasePostPracticeModel {
  constructor(
    @inject(TYPES.KanjiRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
