import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { IJPostRepository } from 'lib/type'

export interface IPostRepository {
    overView(id: string): (props: any) => JSX.Element
    showDetail(postId: string):(props: any) => JSX.Element
    getJsonLd(postId: string): any
    getMetadata(postId: string): any
}

@injectable()
export class PostClient {
  constructor(@inject(IJPostRepository) public readonly client: IPostRepository) {}
}