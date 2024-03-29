import { WordRepositoryPart, MeanUtilsPart } from "app/component/part";
import {
  AdminEditMeanPartClient,
  UserEditMeanPartClient,
} from "app/component/part-client";
import { injectable } from "inversify";
import { hantuListConst } from "lib/const";
import { BasePostPage } from "app/(subpage)/post/page";

@injectable()
export class WordPage extends BasePostPage {
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
    return WordRepositoryPart;
  }
  public override getMetadata() {
    return {
      title: `Ý nghĩa ${this.id}`,
      keywords: [`Ý nghĩa ${this.id}`, `Dịch ${this.id}`],
      description: `Ý nghĩa ${this.id}`,
      openGraph: {
        title: `Ý nghĩa ${this.id}`,
        description: `Ý nghĩa ${this.id}`,
        url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/post/mean/${this.id}`,
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
        name: this.id,
        description: `Ý nghĩa ${this.id}, dịch ${this.id}`,
      },
      educationalLevel: hantuListConst()[this.id],
    };
  }
}
