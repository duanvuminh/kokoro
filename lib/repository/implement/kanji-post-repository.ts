import { BaseKanjiRepository } from "./base-kanji-repository";
import * as KanjiList from "mdx/mdx-post-content";
import { PostContentPart } from "component/part";
import { injectable } from "inversify";

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
