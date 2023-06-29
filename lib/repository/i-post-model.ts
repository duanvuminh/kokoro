import { Metadata } from "next";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): Metadata;
  getMdx(): (props: any) => JSX.Element|Promise<JSX.Element>;
  showDetail(): (props: any) => JSX.Element|Promise<JSX.Element>;
}
