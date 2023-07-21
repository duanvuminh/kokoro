import { Metadata } from "next";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): Metadata;
  getSource(): (props: any) => JSX.Element|Promise<JSX.Element>;
  content(): (props: any) => JSX.Element|Promise<JSX.Element>;
}
