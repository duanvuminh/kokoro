import { DayInMonthPart } from "component/part";
import { injectable } from "inversify";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { type IPostModel, IPostTypeListModel } from "lib/repository";
import { Metadata } from "next";

@injectable()
export class BasePostTypeListModel implements IPostTypeListModel, IPostModel {
  private _post: IPostModel | undefined;
  private postfix = "-origin";
  private get post(): IPostModel {
    if (this._post != undefined) return this._post;
    this._post = getContainer().getNamed<IPostModel>(
      TYPES.IPostModel,
      this.postType + this.postfix
    );
    this._post.postId = this.postId;
    this._post.postType = this.postType;
    return this._post;
  }
  postId!: string;
  postType!: string;

  getJsonLd(): {} {
    return this.post.getJsonLd();
  }
  getMetadata(): Metadata {
    return this.post.getMetadata();
  }
  getSource(): (props: any) => JSX.Element | Promise<JSX.Element> {
    return this.post.getSource();
  }
  content(): (props: any) => JSX.Element | Promise<JSX.Element> {
    const Content = this.post.content() as any;
    const LinkPices = this.linkPices();
    console.log(LinkPices)
    return (props:any) => Content({...props,children: LinkPices({postId: this.postId,postType:this.postType})});
  }
  userEdit(): (props: any) => JSX.Element {
    return this.post.userEdit();
  }
  adminEdit(): (props: any) => JSX.Element {
    return this.post.adminEdit();
  }
  selectorEdit(): (props: any) => JSX.Element {
    return this.post.selectorEdit();
  }

  breakToPices() {
    console.log("manual break long content to small pices");
  }
  linkPices() {
    return DayInMonthPart;
  }
}
