import { Metadata } from "next";

export interface IPostPage {
  get id(): string;
  set id(value: string);
  get postType(): string;
  set postType(value: string);
  getJsonLd(): {};
  getMetadata(): Metadata;
  getSource(): (props: any) => JSX.Element | Promise<JSX.Element>;
  content(): (props: any) => JSX.Element | Promise<JSX.Element>;
  userEdit(): (props: any) => JSX.Element;
  adminEdit(): (props: any) => JSX.Element;
  selectorEdit(): (props: any) => JSX.Element;
}
