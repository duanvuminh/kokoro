import { MdxWrapPart } from "app/lib/component/part";
import { injectable } from "inversify";
import { IPostModel } from "app/lib/repository";
import { Default } from "app/lib/mdx/mdx-random-page";

@injectable()
export abstract class BasePostModel implements IPostModel {
  getMdx(): (props: any) => JSX.Element {
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

  showDetail(): (props: any) => JSX.Element {
    return this.getMdx();
  }

  private _getPost(postId: string) {
    const id = postId as keyof typeof this.PageContentList;
    if (this.PageContentList[id] !== undefined) {
      return this.PageContentList[id];
    }
    return Default;
  }
}
