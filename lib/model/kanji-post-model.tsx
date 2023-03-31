import { IPostService, PostListClient } from "lib/service";
import * as KanjiList from "@/lib/mdx"

export class KanjiPostModel implements IPostService {
  private _post: any

  private _setPost(postId: string){
    this._post = this._getPost(postId)
  }

  private _getPost(postId: string){
    if (KanjiList[postId as keyof typeof KanjiList] !== undefined) {
      return this._post =  KanjiList[postId as keyof typeof KanjiList]
    }
    return this._post = KanjiList.Blank
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
    return this._post?.default;
  }
}

