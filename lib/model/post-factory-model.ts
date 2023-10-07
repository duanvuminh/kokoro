import { inject, injectable } from "inversify";
import { TYPES } from "lib/app/const";
import { IPostRepository } from "lib/app/service";

export interface IPostFactoryModel {
  Create(postType: string, id: string): IPostRepository;
}

@injectable()
export class PostFactoryImplementModel implements IPostFactoryModel {
  private _postFactory: (postType: string, id: string) => IPostRepository;

  constructor(
    @inject(TYPES.IPostFactoryCreator)
    factory: (postType: string, id: string) => IPostRepository
  ) {
    this._postFactory = factory;
  }
  public Create(targetName: string, id: string): IPostRepository {
    return this._postFactory(targetName, id);
  }
}
