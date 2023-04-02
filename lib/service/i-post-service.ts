import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'

export interface IPostService {
    overView(id: string): (props: any) => JSX.Element
    showDetail(postId: string):(props: any) => JSX.Element
    getJsonLd(postId: string): any
    getMetadata(postId: string): any
}

@injectable()
export class PostClient {
  constructor(@inject('IPostService') public readonly client: IPostService) {}
}