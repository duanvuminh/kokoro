import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import {
  generateJsonLDForKanjiList,
  generateMetadataForKanjiList,
} from "lib/util";
import * as SubjectList from "mdx/mdx-subject";

@injectable()
export class SubjectRepository extends BasePostModel {
  PageContentList: any = SubjectList;
  public override getMetadata() {
    return generateMetadataForKanjiList(this.postId);
  }
  public override getJsonLd() {
    return generateJsonLDForKanjiList(this.postId);
  }
}
