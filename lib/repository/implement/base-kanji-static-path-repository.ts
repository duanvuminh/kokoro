import { injectable } from "inversify";
import { PostParameterModel } from "lib/model";
import type { IPageStaticPathRepository } from "lib/repository";

@injectable()
export abstract class BaseKanjiStaticPathRepository
  implements IPageStaticPathRepository
{
  abstract paths: string[];
  getAllPath(): PostParameterModel[] {
    return this.paths.map((path) => new PostParameterModel(path));
  }
}
