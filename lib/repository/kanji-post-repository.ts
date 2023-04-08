import { BaseKanjiRepository } from "./base-kanji-repository";
import * as KanjiList from "mdx/mdx-post-content"
import * as SummaryList from "mdx/mdx-post-summary"

export class KanjiPostRepository extends BaseKanjiRepository {
    PageContentList: any = KanjiList
    SummaryList: any = SummaryList
}

