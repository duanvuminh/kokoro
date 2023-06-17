import { hantuListConst } from "lib/const";
import { PostContentPart, WordPart } from "component/part";
import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import * as KanjiList from "mdx/mdx-kanji";

@injectable()
export class WordPostRepository extends BasePostModel {
  override PageContentList = KanjiList;

  public override showDetail() {
    return () => WordPart({ params: { pageId: this.postId } });
  }
  public override getMetadata() {
    return {
      title: `từ vựng ${this.postId}`,
      keywords: [`từ vựng ${this.postId}`],
      description: `từ vựng ${this.postId}`,
      openGraph: {
        title: `từ vựng ${this.postId}`,
        description: `từ vựng ${this.postId}`,
        url: `https://kyomo.vercel.app/post/word/${this.postId}`,
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
        description: `từ vựng ${this.postId}`,
      },
      educationalLevel: hantuListConst[this.postId],
    };
  }
}
