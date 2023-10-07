import { inject, injectable } from "inversify";
import { TYPES } from "lib/app/const";
import { BasePostPracticeModel } from "lib/model";
import { type IPostRepository } from "lib/app/service";

@injectable()
export class WordDecoratorRepository extends BasePostPracticeModel {
  constructor(
    @inject(TYPES.WordRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
