import { injectable } from "inversify";
import { BasePostModel } from "app/(subpage)/post/views";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "lib/util";
import * as SubjectList from "mdx/mdx-word-list";
import { SubjectRepositoryPart } from "app/component/part";

@injectable()
export class WordListRepository extends BasePostModel {
  PageContentList: any = SubjectList;
  public override content() {
    return SubjectRepositoryPart;
  }
  public override getMetadata() {
    return generateMetadataForKanjiList(this.id);
  }
  public override getJsonLd() {
    return generateJsonLDForKanjiList(this.id);
  }
}
