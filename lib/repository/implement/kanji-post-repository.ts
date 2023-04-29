import { BaseKanjiRepository } from "./base-kanji-repository";
import * as KanjiList from "mdx/mdx-post-content";
import { MdxWrapPart, PostContentPart } from "component/part";
import { Fragment } from "react";
import { injectable } from "inversify";

@injectable()
export class KanjiPostRepository extends BaseKanjiRepository {
  override PageContentList = KanjiList;
  private _postId = "";

  public override init(postId: string): void {
    super.init(postId);
    this._postId = postId;
  }

  public override showDetail() {
    return () =>
      PostContentPart({
        postId: this._postId,
        Content: super.showDetail(),
      });
  }
}
