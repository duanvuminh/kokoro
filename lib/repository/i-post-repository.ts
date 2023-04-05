import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { IJPostRepository } from 'lib/type'

export interface IPostRepository {
    init(id: string): void
    summaryTitle(): string
    summaryContent(): (props: any) => JSX.Element
    showDetail():(props: any) => JSX.Element
    getJsonLd(): any
    getMetadata(): any
}

@injectable()
export class PostClient {
  constructor(@inject(IJPostRepository) public readonly client: IPostRepository) {}
}