import { Metadata } from "next";
import { ReactNode } from "react";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): Metadata;
  getSource(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  content(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  distribute(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  editPost(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
}
