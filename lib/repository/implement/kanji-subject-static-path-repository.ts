import { injectable } from "inversify";
import { BaseKanjiStaticPathRepository } from "lib/repository";
import { paths } from "mdx/mdx-subject";

@injectable()
export class KanjiSubjectStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths;
}
