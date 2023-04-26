import { injectable } from "inversify";
import { BaseKanjiRepository } from "lib/repository";
import * as SubjectList from "mdx/mdx-subject";

@injectable()
export class KanjiSubjectRepository extends BaseKanjiRepository {
  PageContentList: any = SubjectList;
}
