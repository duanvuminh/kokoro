import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IJSubjectClient } from "lib/type";
import type { IPageContentRepository } from "lib/repository";

@injectable()
export class SubjectClient {
  constructor(
    @inject(IJSubjectClient) public readonly client: IPageContentRepository
  ) {}
}
