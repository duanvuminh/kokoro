import { PostContentPart } from "component/part";
import { injectable } from "inversify";
import { hantuListConst } from "lib/const";
import { BasePostModel } from "lib/model";
import * as KanjiList from "mdx/mdx-kanji";

@injectable()
export class KanjiRepository extends BasePostModel {
  override PageContentList = KanjiList;

  public override showDetail() {
    return () =>
      PostContentPart({
        postId: this.postId,
        Content: super.showDetail(),
      });
  }
  public override getMetadata() {
    return {
      title: `Hán tự ${this.postId}`,
      keywords: [`Hán tự ${this.postId}`, `Cách nhớ ${this.postId}`],
      description: `Cách nhớ ${this.postId}`,
      openGraph: {
        title: `Hán tự ${this.postId}`,
        description: `Cách nhớ ${this.postId}`,
        url: `https://kyomo.vercel.app/post/kanji/${this.postId}`,
        siteName: `Kyo`,
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
        description: `Hán tự ${this.postId}, cách nhớ ${this.postId}`,
      },
      educationalLevel: hantuListConst[this.postId],
    };
  }
}