import { PostParameterModel } from "lib/model";

export interface IPageStaticPathRepository {
  getAllPath(): Array<PostParameterModel>;
}
