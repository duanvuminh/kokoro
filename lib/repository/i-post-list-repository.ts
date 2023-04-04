import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import type { PostParameterModel } from 'lib/model'
import { IJPostListRepository } from 'lib/type'

export interface IPostListRepository {
    getAllPath():Array<PostParameterModel>
}

@injectable()
export class PostListClient {
  constructor(@inject(IJPostListRepository) public readonly client: IPostListRepository) {}
}