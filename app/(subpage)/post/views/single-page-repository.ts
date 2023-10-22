import { injectable } from "inversify";
import { BasePostModel } from "app/(subpage)/post/views";
import * as SinglePage from "mdx/mdx-single-page";

@injectable()
export class SinglePageRepository extends BasePostModel {
  override PageContentList = SinglePage;
}
