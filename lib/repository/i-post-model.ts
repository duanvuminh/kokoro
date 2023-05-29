import { Metadata } from "next";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): Metadata;
  showDetail(): (props: any) => JSX.Element;
}