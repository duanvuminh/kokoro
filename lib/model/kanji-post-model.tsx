import "server-only";

import { IPostService } from "lib/service";
import * as KanjiList from "lib/mdx-kanji"
import * as OverVIewList from "lib/mdx-kanji-overview"
import { Default } from "lib/mdx-page"
import { Blank } from "lib/part-server";

export class KanjiPostModel implements IPostService {
  overView(postId: string): (props: any) => JSX.Element{
    this._setOverview(postId)
    return this._overView?.default?? Blank
  }

  getMetadata(postId: string) {
    this._setPost(postId)
    return this._post?.metadata??{};
  }

  getJsonLd(postId: string) {
    this._setPost(postId)
    return this._post?.jsonLd??{};
  }

  showDetail(postId: string){
    this._setPost(postId)
    return this._post.default;
  }

  private _post: any
  private _overView: any

  private _setPost(postId: string){
    this._post = this._getPost(postId)
  }

  private _setOverview(postId: string){
    this._overView = this._getOverView(postId)
  }

  private _getPost(postId: string){
    if (KanjiList[postId as keyof typeof KanjiList] !== undefined) {
      return this._post =  KanjiList[postId as keyof typeof KanjiList]
    }
    return this._post = Default
  }

  private _getOverView(postId: string){
    if (OverVIewList[postId as keyof typeof OverVIewList] !== undefined) {
      return this._overView =  OverVIewList[postId as keyof typeof OverVIewList]
    }
  }
}

