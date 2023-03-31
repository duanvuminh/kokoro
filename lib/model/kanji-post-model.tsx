import { IPostService, PostListClient } from "lib/service";
import { container } from "tsyringe";
import * as KanjiList from "@/lib/mdx"

export class KanjiPostModel implements IPostService {

  constructor(){
    this._postId = null
    const postListClient = container.resolve(PostListClient)
    this._path = postListClient.client.pathToMdx
  }
  private _postId: string | null

  private _path: string | null

  private _post: any

  private async _setPost(postId: string){
    if(this._postId == postId) return
    this._postId = postId
    this._post = await import(`lib/${this._path}/${postId}.mdx`)
  }

  async getMetadata(postId: string) {
    await this._setPost(postId)
    return this._post?.metadata;
  }

  async getJsonLd(postId: string) {
    await this._setPost(postId)
    return this._post?.jsonLd;
  }

  showDetail(postId: string){
    if (KanjiList[postId as keyof typeof KanjiList] !== undefined) {
      return KanjiList[postId as keyof typeof KanjiList]
    }
    return KanjiList.Blank
  }
}

