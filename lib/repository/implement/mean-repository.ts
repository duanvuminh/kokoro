import { MeanRepositoryPart } from "component/part";
import { injectable } from "inversify";
import { hantuListConst } from "lib/const";
import { BasePostModel } from "lib/model";
import * as MeanList from "mdx/mdx-mean";

@injectable()
export class MeanRepository extends BasePostModel {
  override PageContentList = MeanList;
  public override showDetail() {
    if (this.postId in MeanList) {
      return super.showDetail();
    }
    return MeanRepositoryPart;
  }
  public override getMetadata() {
    return {
      title: `Ý nghĩa ${this.postId}`,
      keywords: [`Ý nghĩa ${this.postId}`, `Dịch ${this.postId}`],
      description: `Ý nghĩa ${this.postId}`,
      openGraph: {
        title: `Ý nghĩa ${this.postId}`,
        description: `Ý nghĩa ${this.postId}`,
        url: `https://kyomo.vercel.app/post/mean/${this.postId}`,
        siteName: `kyomo`,
        type: `website`,
      },
    };
  }
  public override getJsonLd() {
    return {
      "@context": `https://schema.org`,
      "@type": `TextDigitalDocument`,
      about: {
        name: this.postId,
        description: `Ý nghĩa ${this.postId}, dịch ${this.postId}`,
      },
      educationalLevel: hantuListConst[this.postId],
    };
  }
}
