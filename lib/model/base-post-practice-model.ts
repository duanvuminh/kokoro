import { AddToPracticePart } from "component/part/add-to-practice-part";
import { injectable } from "inversify";
import { type IPostRepository, IPostPracticeAbleRepository } from "lib/repository";
import { Metadata } from "next";

@injectable()
export class BasePostPracticeModel implements IPostPracticeAbleRepository, IPostRepository {
  private _post: IPostRepository | undefined;
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

  private _id:string | undefined;
  get id(): string {
    if(this._id==undefined){
      return "";
    }
    return this._id;
  }
  set id(value: string) {
    if (this._post) {
      this._post.id = value;
    }
    this._id= value;
  }

  constructor(
    post: IPostRepository
  ) {
    this._post = post;
  }
  addToList() {
    return AddToPracticePart;
  };

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
    const AddToList = this.addToList();
    return (props: any) =>
      Content({
        ...props,
        children: AddToList({ id: this.id, postType: this.postType }),
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
}
