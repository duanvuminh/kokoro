import { MdxWrapPart } from "component/part";
import { injectable } from "inversify";
import { IPostModel } from "lib/repository";
import { Default } from "mdx/mdx-component";

@injectable()
export abstract class BasePostModel implements IPostModel {
  getSource(): (props: any) => JSX.Element | Promise<JSX.Element> {
    const _post = this._getPost(this.postId);
    return () => MdxWrapPart({ children: _post.default() });
  }
  postId!: string;

  abstract PageContentList: any;

  getMetadata() {
    const _post = this._getPost(this.postId);
    return _post?.metadata;
  }

  getJsonLd() {
    const _post = this._getPost(this.postId);
    return _post?.jsonLd ?? {};
  }

  content(): (props: any) => JSX.Element | Promise<JSX.Element> {
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
