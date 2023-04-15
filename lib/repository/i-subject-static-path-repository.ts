import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import type { IPageStaticPathRepository } from "lib/repository";
import { IJSubjectStatiPathClient } from "lib/type";

@injectable()
export class SubjectStatiPathClient {
  constructor(
    @inject(IJSubjectStatiPathClient)
    public readonly client: IPageStaticPathRepository
  ) {}
}
