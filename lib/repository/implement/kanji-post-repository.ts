import { PostContentPart } from "component/part";
import { injectable } from "inversify";
import * as KanjiList from "mdx/mdx-post-content";
import { BaseKanjiRepository } from "lib/model";

@injectable()
export class KanjiPostRepository extends BaseKanjiRepository {
  override PageContentList = KanjiList;

  public override showDetail() {
    return () =>
      PostContentPart({
        postId: this.postId,
        Content: super.showDetail(),
      });
  }
}
