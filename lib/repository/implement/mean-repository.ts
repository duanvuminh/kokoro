"use server";
import { MeanRepositoryPart, MeanUtilsPart } from "component/part";
import {
  AdminEditMeanPartClient,
  UserEditMeanPartClient,
} from "component/part-client";
import { injectable } from "inversify";
import { hantuListConst } from "lib/const";
import { BasePostModel } from "lib/model";

@injectable()
export class MeanRepository extends BasePostModel {
  PageContentList: any;

  public override userEdit() {
    return UserEditMeanPartClient;
  }

  public override adminEdit() {
    return AdminEditMeanPartClient;
  }

  public override getSource() {
    return MeanUtilsPart;
  }

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
        url: `https://${process.env.VERCEL_URL}/post/mean/${this.postId}`,
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
