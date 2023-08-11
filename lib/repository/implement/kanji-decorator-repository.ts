import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { BasePostPractiveModel } from "lib/model";
import { type IPostModel } from "lib/repository";

@injectable()
export class KanjiDecoratorRepository extends BasePostPractiveModel {
  constructor(
    @inject(TYPES.KanjiRepository)
    post: IPostModel
  ) {
    super(post);
  }
}
