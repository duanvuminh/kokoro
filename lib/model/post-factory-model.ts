import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import { IPostModel } from "lib/repository";

export interface IPostFactoryModel {
  Create(postType: string, id: string): IPostModel;
}

@injectable()
export class PostFactoryImplementModel implements IPostFactoryModel {
  private _postFactory: (postType: string, id: string) => IPostModel;

  constructor(
    @inject(TYPES.IPostFactoryCreator)
    factory: (postType: string, id: string) => IPostModel
  ) {
    this._postFactory = factory;
  }
  public Create(targetName: string, id: string): IPostModel {
    return this._postFactory(targetName, id);
  }
}
