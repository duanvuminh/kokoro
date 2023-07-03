import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import * as SinglePage from "mdx/mdx-single-page";

@injectable()
export class SinglePageRepository extends BasePostModel {
  override PageContentList = SinglePage;
}
