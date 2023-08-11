import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPractiveModel } from "lib/model";
import { type IPostModel } from "lib/repository";

@injectable()
export class WordDecoratorRepository extends BasePostPractiveModel {
  constructor(
    @inject(TYPES.WordRepository)
    post: IPostModel
  ) {
    super(post);
  }
}
