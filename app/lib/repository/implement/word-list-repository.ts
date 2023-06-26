import { DayInMonthPartClient } from "app/lib/component/part-client";
import { injectable } from "inversify";
import { BasePostModel } from "app/lib/model";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "app/lib/util";
import * as SubjectList from "app/lib/mdx/mdx-word-list";
import { SubjectRepositoryPart } from "app/lib/component/part";

@injectable()
export class WordListRepository extends BasePostModel {
  PageContentList: any = SubjectList;
  public override showDetail(): (props: any) => JSX.Element {
    return SubjectRepositoryPart;
  }
  public override getMetadata() {
    return generateMetadataForKanjiList(this.postId);
  }
  public override getJsonLd() {
    return generateJsonLDForKanjiList(this.postId);
  }
}
