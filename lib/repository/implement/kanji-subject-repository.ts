import { injectable } from "inversify";
import { BaseKanjiRepository } from "lib/model";
import * as SubjectList from "mdx/mdx-subject";

@injectable()
export class KanjiSubjectRepository extends BaseKanjiRepository {
  PageContentList: any = SubjectList;
}
