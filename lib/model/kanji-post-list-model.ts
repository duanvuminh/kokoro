import "server-only";

import type { IPostListService } from 'lib/service'
import type { PostParameterModel } from './post-parameter-model'
import { getAllPostIds } from 'lib/repository'
import { MdxPath } from 'lib/type/site-const'

export class KanjiPostListModel implements IPostListService {
  constructor(){
    this.pathToMdx = MdxPath
  }
  private pathToMdx: string
  getAllPath(): PostParameterModel[] {
    return getAllPostIds(this.pathToMdx)
  }
}