import { Default } from "mdx/mdx-random-page";
import { Blank } from "lib/part/blank-part-server";
import { EmptyString } from "lib/type";
import { IPageContentRepository } from "lib/repository";

export abstract class BaseKanjiRepository implements IPageContentRepository {
    init(postId: string): void {
      this._setSummary(postId)
      this._setPost(postId)
    }

    getMetadata() {
      return this._post?.metadata??{};
    }
    getJsonLd() {
      return this._post?.jsonLd??{};
    }
    
    summaryTitle(): string {
      return this._summary?.metadata as string ?? EmptyString
    }
    summaryContent(): (props: any) => JSX.Element{
      return this._summary?.default?? Blank
    }
  
    showDetail(){
      return this._post.default;
    }
    showPlugin(): (props: any) => JSX.Element {
      return Default.default
    }

    abstract PageContentList: any
    abstract SummaryList: any

    private _post: any
    private _summary: any
  
    private _setPost(postId: string){
      this._post = this._getPost(postId)
    }
  
    private _setSummary(postId: string){
      this._summary = this._getSummary(postId)
    }
  
    private _getPost(postId: string){
      const id = postId as keyof typeof this.PageContentList
      if (this.PageContentList[id] !== undefined) {
        return this.PageContentList[id]
      }
      return Default
    }
  
    private _getSummary(postId: string){
      const id = postId as keyof typeof this.SummaryList
      if (this.SummaryList !== undefined && this.SummaryList[id] !== undefined) {
        return this._summary =  this.SummaryList[id]
      }
      return Default
    }
  }