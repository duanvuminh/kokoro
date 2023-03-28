import 'reflect-metadata'
import { inject, injectable, Lifecycle, scoped } from 'tsyringe'
import type { PostParameterModel } from 'lib/model'

export interface IPostListService {
    pathToMdx: string
    getAllPath():Array<PostParameterModel>
}

@scoped(Lifecycle.ContainerScoped)
@injectable()
export class PostListClient {
  constructor(@inject('IPostListService') public readonly client: IPostListService) {}
}