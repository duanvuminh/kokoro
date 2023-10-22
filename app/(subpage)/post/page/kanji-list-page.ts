import { BasePostPage } from "app/(subpage)/post/page";
import { SubjectRepositoryPart } from "app/component/part";
import { injectable } from "inversify";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "lib/util";
import * as SubjectList from "mdx/mdx-kanji-list";

@injectable()
export class KanjiListPage extends BasePostPage {
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
