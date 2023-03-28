import { IPostService, PostListClient } from "lib/service";
import dynamic from "next/dynamic";
import { container } from "tsyringe";
import * as Kanji from 'lib/mdx/kanji'


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
    return this._post.metadata;
  }

  async getJsonLd(postId: string) {
    await this._setPost(postId)
    return this._post.jsonLd;
  }

  showDetail(postId: string){
    return dynamic(() => import('lib/mdx/kanji').then(posts => posts[postId as keyof typeof posts]))
  }
}

