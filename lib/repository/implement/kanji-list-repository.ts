"use server"
import { SubjectRepositoryPart } from "component/part";
import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "lib/util";
import * as SubjectList from "mdx/mdx-kanji-list";

@injectable()
export class KanjiListRepository extends BasePostModel {
  PageContentList: any = SubjectList;
  public override showDetail() {
    return SubjectRepositoryPart;
  }
  public override getMetadata() {
    return generateMetadataForKanjiList(this.postId);
  }
  public override getJsonLd() {
    return generateJsonLDForKanjiList(this.postId);
  }
}
