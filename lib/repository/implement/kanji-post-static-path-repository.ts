import { injectable } from "inversify";
import { BaseKanjiStaticPathRepository } from "lib/repository";
import { paths } from "mdx/mdx-post-content";

@injectable()
export class KanjiPostStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths;
}
