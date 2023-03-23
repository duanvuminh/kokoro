import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { PostParameterModel } from 'lib/model'

export interface IPostListService {
    pathToMdx: string
    getAllPath():Array<PostParameterModel>
}

@injectable()
export class PostListClient {
  constructor(@inject('IPostListService') public readonly client: IPostListService) {}
}