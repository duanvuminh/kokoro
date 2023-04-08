import { PostParameterModel } from "lib/model";
import { paths } from "mdx/mdx-subject";
import { BaseKanjiStaticPathRepository } from "lib/repository";

export class KanjiSubjectStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths;
}