import { paths } from "mdx/mdx-post-content";
import { BaseKanjiStaticPathRepository } from "lib/repository";

export class KanjiPostStaticPathRepository extends BaseKanjiStaticPathRepository {
  paths: string[] = paths
}