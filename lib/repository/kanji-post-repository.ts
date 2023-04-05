import "server-only";

import { IPostRepository } from "lib/repository";
import * as KanjiList from "lib/mdx-post"
import * as Summary from "lib/mdx-post/index_summary"
import { Default } from "lib/mdx-page"
import { Blank } from "lib/part/index-server";
import { PostfixSummary } from "lib/type";

export class KanjiPostRepository implements IPostRepository {
  init(postId: string): void {
    this._setSummary(postId)
    this._setPost(postId)
  }
  summaryTitle(): string {
    return this._summary?.metadata as string ?? 'Blank'
  }

  summaryContent(): (props: any) => JSX.Element{
    return this._summary?.default?? Blank
  }

  getMetadata() {
    return this._post?.metadata??{};
  }

  getJsonLd() {
    return this._post?.jsonLd??{};
  }

  showDetail(){
    return this._post.default;
  }

  private _post: any
  private _summary: any

  private _setPost(postId: string){
    this._post = this._getPost(postId)
  }

  private _setSummary(postId: string){
    this._summary = this._getSummary(postId)
  }

  private _getPost(postId: string){
    if (KanjiList[postId as keyof typeof KanjiList] !== undefined) {
      return this._post =  KanjiList[postId as keyof typeof KanjiList]
    }
    return this._post = Default
  }

  private _getSummary(postId: string){
    const id = `${postId}${PostfixSummary}` as keyof typeof Summary
    if (Summary[id] !== undefined) {
      return this._summary =  Summary[id]
    }
  }
}

