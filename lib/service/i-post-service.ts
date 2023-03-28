import 'reflect-metadata'
import { inject, injectable, Lifecycle, scoped } from 'tsyringe'

export interface IPostService {
    showDetail(postId: string) : any;
    getJsonLd(postId: string): any;
    getMetadata(postId: string): any;
}

@scoped(Lifecycle.ContainerScoped)
@injectable()
export class PostClient {
  constructor(@inject('IPostService') public readonly client: IPostService) {}
}