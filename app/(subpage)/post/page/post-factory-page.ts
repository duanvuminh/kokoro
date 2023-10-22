import { inject, injectable } from "inversify";
import { TYPES } from "lib/const";
import type { IPostPage } from "app/(subpage)/post/page";

export interface IPostFactoryPage {
  Create(postType: string, id: string): IPostPage;
}

@injectable()
export class PostFactoryImplementPage implements IPostFactoryPage {
  private _postFactory: (postType: string, id: string) => IPostPage;

  constructor(
    @inject(TYPES.IPostFactoryCreator)
    factory: (postType: string, id: string) => IPostPage
  ) {
    this._postFactory = factory;
  }
  public Create(targetName: string, id: string): IPostPage {
    return this._postFactory(targetName, id);
  }
}
