import { BaseKanjiRepository } from "lib/repository";
import * as SubjectList from "mdx/mdx-subject"

export class KanjiSubjectRepository extends BaseKanjiRepository {
  PageContentList: any = SubjectList
}

