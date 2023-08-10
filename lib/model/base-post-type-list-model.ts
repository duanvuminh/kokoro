import { DayInMonthPart } from "component/part";
import { injectable } from "inversify";
import { type IPostModel, IPostTypeListModel } from "lib/repository";
import { Metadata } from "next";

@injectable()
export class BasePostTypeListModel implements IPostTypeListModel, IPostModel {
  private _post: IPostModel | undefined;
  private _postType:string | undefined;
  get postType(): string {
    if(this._postType==undefined){
      return "";
    }
    return this._postType;
  }
  set postType(value: string) {
    if (this._post) {
      this._post.postType = value;
    }
    this._postType= value;
  }

  private _postId:string | undefined;
  get postId(): string {
    if(this._postId==undefined){
      return "";
    }
    return this._postId;
  }
  set postId(value: string) {
    if (this._post) {
      this._post.postId = value;
    }
    this._postId= value;
  }

  constructor(
    post: IPostModel
  ) {
    this._post = post;
  }

  getJsonLd(): {} {
    return this._post!.getJsonLd();
  }
  getMetadata(): Metadata {
    return this._post!.getMetadata();
  }
  getSource(): (props: any) => JSX.Element | Promise<JSX.Element> {
    return this._post!.getSource();
  }
  content(): (props: any) => JSX.Element | Promise<JSX.Element> {
    const Content = this._post!.content() as any;
    const LinkPices = this.linkPices();
    return (props: any) =>
      Content({
        ...props,
        children: LinkPices({ postId: this.postId, postType: this.postType }),
      });
  }
  userEdit(): (props: any) => JSX.Element {
    return this._post!.userEdit();
  }
  adminEdit(): (props: any) => JSX.Element {
    return this._post!.adminEdit();
  }
  selectorEdit(): (props: any) => JSX.Element {
    return this._post!.selectorEdit();
  }

  breakToPices() {
    console.log("manual break long content to small pices");
  }
  linkPices() {
    return DayInMonthPart;
  }
}
