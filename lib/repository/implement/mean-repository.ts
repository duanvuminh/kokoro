"use server"
import { MeanRepositoryPart } from "component/part";
import { injectable } from "inversify";
import { hantuListConst } from "lib/const";
import { BasePostModel } from "lib/model";

@injectable()
export class MeanRepository extends BasePostModel {
  PageContentList: any;
  public override content() {
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
      educationalLevel: hantuListConst()[this.postId],
    };
  }
}
