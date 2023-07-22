import { ButtonTextPart, MdxWrapPart } from "component/part";
import {
  DistributePartClient,
  EditPostContextPartClient,
} from "component/part-client";
import { injectable } from "inversify";
import { IPostModel } from "lib/repository";
import { Default } from "mdx/mdx-component";
import { Fragment, ReactNode } from "react";

@injectable()
export abstract class BasePostModel implements IPostModel {
  distribute(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element> {
    return DistributePartClient;
  }
  editPost(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element> {
    return Fragment;
  }
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
