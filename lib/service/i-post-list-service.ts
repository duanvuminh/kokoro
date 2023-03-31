import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import type { PostParameterModel } from 'lib/model'

export interface IPostListService {
    getAllPath():Array<PostParameterModel>
}

@injectable()
export class PostListClient {
  constructor(@inject('IPostListService') public readonly client: IPostListService) {}
}