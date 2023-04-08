import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { IJPostStaticPathClient } from 'lib/type'
import type { IPageStaticPathRepository } from 'lib/repository'

@injectable()
export class PostStaticPathClient {
  constructor(@inject(IJPostStaticPathClient) public readonly client: IPageStaticPathRepository) {}
}