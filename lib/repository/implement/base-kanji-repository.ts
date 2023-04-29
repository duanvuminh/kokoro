import { Default } from "mdx/mdx-random-page";
import { IPageContentRepository } from "lib/repository";
import { MdxWrapPart } from "component/part";
import { injectable } from "inversify";

@injectable()
export abstract class BaseKanjiRepository implements IPageContentRepository {
  init(postId: string): void {
    this._setPost(postId);
  }

  getMetadata() {
    return this._post?.metadata ?? {};
  }
  getJsonLd() {
    return this._post?.jsonLd ?? {};
  }

  showDetail(): (props: any) => JSX.Element {
    return () => MdxWrapPart({ children: this._post.default() });
  }
  showPlugin(): (props: any) => JSX.Element {
    return Default.default;
  }

  abstract PageContentList: any;
  public postId : string | undefined;

  private _post: any;

  private _setPost(postId: string) {
    this.postId = postId;
    this._post = this._getPost(postId);
  }

  private _getPost(postId: string) {
    const id = postId as keyof typeof this.PageContentList;
    if (this.PageContentList[id] !== undefined) {
      return this.PageContentList[id];
    }
    return Default;
  }
}
