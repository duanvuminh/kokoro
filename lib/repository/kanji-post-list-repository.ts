import type { IPostListRepository } from 'lib/repository'
import { PostParameterModel } from "lib/model";
import { paths } from "mdx/mdx-post";

export class KanjiPostListRepository implements IPostListRepository {
  constructor(){
  }
  getAllPath(): PostParameterModel[] {
    return paths.map(path => new PostParameterModel(path))
  }
}