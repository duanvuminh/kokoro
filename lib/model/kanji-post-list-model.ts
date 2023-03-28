import type { IPostListService } from 'lib/service'
import type { PostParameterModel } from './post-parameter-model'
import { getAllPostIds } from 'lib/repository'

export class KanjiPostListModel implements IPostListService {
  constructor(){
    this.pathToMdx = 'mdx/kanji'
  }
  pathToMdx: string
  getAllPath(): PostParameterModel[] {
    return getAllPostIds(this.pathToMdx)
  }
}