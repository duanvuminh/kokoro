import { UserEditPart, MdxWrapPart, SelectorEditPart } from "component/part";
import { injectable } from "inversify";
import { IPostModel } from "lib/repository";
import { Default } from "mdx/mdx-component";

@injectable()
export abstract class BasePostModel implements IPostModel {
  private _postType:string | undefined;
  get postType(): string {
    if(this._postType==undefined){
      return "";
    }
    return this._postType;
  }
  set postType(value: string) {
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
    this._id= value;
  }

  selectorEdit() {
    return SelectorEditPart;
  }
  userEdit() {
    return UserEditPart;
  }
  adminEdit() {
    return UserEditPart;
  }
  getSource():(props: any) => JSX.Element | Promise<JSX.Element>{
    const _post = this._getPost(this.id);
    return () => MdxWrapPart({ children: _post.default() });
  }

  abstract PageContentList: any;

  getMetadata() {
    const _post = this._getPost(this.id);
    return _post?.metadata;
  }

  getJsonLd() {
    const _post = this._getPost(this.id);
    return _post?.jsonLd ?? {};
  }

  content():(props: any) => JSX.Element | Promise<JSX.Element>{
    return this.getSource();
  }

  private _getPost(postId: string) {
    const id = postId as keyof typeof this.PageContentList;
    if (this.PageContentList[id] !== undefined) {
      return this.PageContentList[id];
    }
    return Default;
  }
}
