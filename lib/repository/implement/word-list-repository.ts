import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "lib/util";
import * as SubjectList from "mdx/mdx-word-list";
import { SubjectRepositoryPart } from "component/part";

@injectable()
export class WordListRepository extends BasePostModel {
  PageContentList: any = SubjectList;
  public override content() {
    return SubjectRepositoryPart;
  }
  public override getMetadata() {
    return generateMetadataForKanjiList(this.postId);
  }
  public override getJsonLd() {
    return generateJsonLDForKanjiList(this.postId);
  }
}
