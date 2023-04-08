import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { IJPostClient } from 'lib/type'
import type{ IPageContentRepository } from 'lib/repository'

@injectable()
export class PostClient {
  constructor(@inject(IJPostClient) public readonly client: IPageContentRepository) {}
}