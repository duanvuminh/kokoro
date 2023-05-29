import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import * as SubjectList from "mdx/mdx-subject";

@injectable()
export class KanjiSubjectRepository extends BasePostModel {
  PageContentList: any = SubjectList;
}
