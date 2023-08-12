import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPracticeModel } from "lib/model";
import { type IPostRepository } from "lib/repository";

@injectable()
export class WordDecoratorRepository extends BasePostPracticeModel {
  constructor(
    @inject(TYPES.WordRepository)
    post: IPostRepository
  ) {
    super(post);
  }
}
