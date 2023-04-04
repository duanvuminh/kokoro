import "server-only";

import type { IPostListRepository } from '@/lib/repository'
import { MdxPath } from 'lib/type/site-const'
import { PostParameterModel } from "lib/model";
import { paths } from "lib/mdx-post";

export class KanjiPostListRepository implements IPostListRepository {
  constructor(){
    this.pathToMdx = MdxPath
  }
  private pathToMdx: string
  getAllPath(): PostParameterModel[] {
    return paths.map(path => new PostParameterModel(path))
  }
}