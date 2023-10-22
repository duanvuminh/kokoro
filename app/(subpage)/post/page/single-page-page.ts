import { injectable } from "inversify";
import { BasePostPage as BasePostPage } from "app/(subpage)/post/page";
import * as SinglePage from "mdx/mdx-single-page";

@injectable()
export class SinglePagePage extends BasePostPage {
  override PageContentList = SinglePage;
}
