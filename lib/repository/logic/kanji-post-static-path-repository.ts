import { paths } from "mdx/mdx-post-content";
import { BaseKanjiStaticPathRepository } from "lib/repository";
import { injectable } from "inversify";

@injectable()
export class KanjiPostStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths;
}
