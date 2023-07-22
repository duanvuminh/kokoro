import { Metadata } from "next";
import { ReactNode } from "react";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): Metadata;
  getSource(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  content(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  userEdit(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
  adminEdit(): (props: any) => ReactNode | JSX.Element | Promise<JSX.Element>;
}
