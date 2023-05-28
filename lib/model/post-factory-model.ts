import { inject, injectable } from "inversify";
import { IPostModel } from "lib/repository";

export interface IPostFactory {
  Create(targetName: string, postID: string): IPostModel;
}

@injectable()
export class PostFactoryImplement implements IPostFactory {
  private _postFactory: (targetName: string, postId: string) => IPostModel;

  constructor(
    @inject("Factory<IPostModel>")
    factory: (targetName: string, postId: string) => IPostModel
  ) {
    this._postFactory = factory;
  }
  public Create(targetName: string, postID: string): IPostModel {
    return this._postFactory(targetName, postID);
  }
}
