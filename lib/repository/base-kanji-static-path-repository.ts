import { PostParameterModel } from "lib/model";
import { IPageStaticPathRepository } from "./i-page-static-path-repository";

export abstract class BaseKanjiStaticPathRepository implements IPageStaticPathRepository {
  abstract paths: string[]
  getAllPath(): PostParameterModel[] {
    return this.paths.map(path => new PostParameterModel(path))
  }
}