import { MdxWrapPart } from "component/part";
import { injectable } from "inversify";
import { PostParameterModel } from "lib/model";
import { Default } from "mdx/mdx-random-page";
import { IPostModel } from "lib/repository";

@injectable()
export abstract class BaseKanjiRepository implements IPostModel {
  postId!: string;

  abstract PageContentList: any;

  getMetadata() {
    const _post = this._getPost(this.postId);
    return _post?.metadata ?? {};
  }
  getJsonLd() {
    const _post = this._getPost(this.postId);
    return _post?.jsonLd ?? {};
  }

  showDetail(): (props: any) => JSX.Element {
    const _post = this._getPost(this.postId);
    return () => MdxWrapPart({ children: _post.default() });
  }
  showPlugin(): (props: any) => JSX.Element {
    return Default.default;
  }

  private _getPost(postId: string) {
    const id = postId as keyof typeof this.PageContentList;
    if (this.PageContentList[id] !== undefined) {
      return this.PageContentList[id];
    }
    return Default;
  }
}
