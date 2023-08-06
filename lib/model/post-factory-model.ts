import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { IPostModel } from "lib/repository";

export interface IPostFactoryModel {
  Create(targetName: string, postID: string): IPostModel;
}

@injectable()
export class PostFactoryImplementModel implements IPostFactoryModel {
  private _postFactory: (targetName: string, postId: string) => IPostModel;

  constructor(
    @inject(TYPES.IPostFactoryCreator)
    factory: (targetName: string, postId: string) => IPostModel
  ) {
    this._postFactory = factory;
  }
  public Create(targetName: string, postID: string): IPostModel {
    return this._postFactory(targetName, postID);
  }
}
