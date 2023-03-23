import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { PostParameter } from 'lib/model'

export interface IPostListService {
    pathToMdx: string
    getAllPath():Array<PostParameter>
}

@injectable()
export class PostListClient {
  constructor(@inject('IPostListService') public readonly client: IPostListService) {}
}