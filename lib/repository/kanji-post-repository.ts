import { BaseKanjiRepository } from "./base-kanji-repository";
import * as KanjiList from "mdx/mdx-post-content";
import * as SummaryList from "mdx/mdx-post-summary";
import { IPostRepository } from "lib/repository";
import { Blank, MdxWrap } from "component/part";

export class KanjiPostRepository
  extends BaseKanjiRepository
  implements IPostRepository
{
  init(postId: string): void {
    super.init(postId);
    this._setSummary(postId);
  }
  summaryContent(): (props: any) => JSX.Element {
    return ()=>MdxWrap({children: this._summary?.default()?? Blank()});
  }
  PageContentList: any = KanjiList;
  SummaryList: any = SummaryList;

  private _summary: any;
  private _setSummary(postId: string) {
    this._summary = this._getSummary(postId);
  }
  private _getSummary(postId: string) {
    const id = postId as keyof typeof this.SummaryList;
    if (this.SummaryList !== undefined && this.SummaryList[id] !== undefined) {
      return (this._summary = this.SummaryList[id]);
    }
  }
}
