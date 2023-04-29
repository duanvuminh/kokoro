import { paths } from "mdx/mdx-subject";
import { BaseKanjiStaticPathRepository } from "lib/repository";
import { injectable } from "inversify";

@injectable()
export class KanjiSubjectStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths;
}
