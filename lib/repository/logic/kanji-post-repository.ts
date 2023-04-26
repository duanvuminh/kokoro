import { BaseKanjiRepository } from "./base-kanji-repository";
import * as KanjiList from "mdx/mdx-post-content";
import * as SummaryList from "mdx/mdx-post-summary";
import { MdxWrapPart, PostContentPart } from "component/part";
import { Fragment } from "react";
import { injectable } from "inversify";

@injectable()
export class KanjiPostRepository
  extends BaseKanjiRepository
{
  override PageContentList =  KanjiList;
  private _summary: any;
  private readonly _summaryList =  SummaryList;
  private _postId = "";

  private _getSummary(postId: string) {
    const id = postId as keyof typeof this._summaryList;
    return this._summaryList[id] ?? null;
  }

  private _setSummary(postId: string): void {
    this._summary = this._getSummary(postId);
  }

  public override init(postId: string): void {
    super.init(postId);
    this._setSummary(postId);
    this._postId = postId;
  }

  public override showDetail() {
    const summary = (props: any) =>
      MdxWrapPart({ children: this._summary?.default() ?? Fragment });
    return () =>
      PostContentPart({
        postId: this._postId,
        Summary: summary,
        Content: super.showDetail(),
      });
  }
}
