import { PostContentPart } from "component/part";
import { injectable } from "inversify";
import * as KanjiList from "mdx/mdx-post-content";
import { BaseKanjiRepository } from "./base-kanji-repository";

@injectable()
export class KanjiPostRepository extends BaseKanjiRepository {
  override PageContentList = KanjiList;

  public override async init(postId: string): Promise<void> {
    super.init(postId);
  }

  public override showDetail() {
    return () =>
      PostContentPart({
        postId: this.postId!,
        Content: super.showDetail(),
      });
  }
}
