import { injectable } from "inversify";
import { PostParameterModel } from "lib/model";

export interface IPostModel {
  postId: string;
  getJsonLd(): {};
  getMetadata(): {};
  showDetail(): (props: any) => JSX.Element;
  showPlugin(): (props: any) => JSX.Element;
}