import { PostContentPart } from "component/part";
import { injectable } from "inversify";
import { hantuListConst } from "lib/app/const";
import { BasePostModel } from "lib/model";
import * as KanjiList from "mdx/mdx-kanji";

@injectable()
export class KanjiRepository extends BasePostModel {
  override PageContentList = KanjiList;

  public override content() {
    return PostContentPart;
  }
  public override getMetadata() {
    return {
      title: `Hán tự ${this.id}`,
      keywords: [`Hán tự ${this.id}`, `Cách nhớ ${this.id}`],
      description: `Cách nhớ ${this.id}`,
      openGraph: {
        title: `Hán tự ${this.id}`,
        description: `Cách nhớ ${this.id}`,
        url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/post/kanji/${this.id}`,
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
        description: `Hán tự ${this.id}, cách nhớ ${this.id}`,
      },
      educationalLevel: hantuListConst()[this.id],
    };
  }
}
