import { PostContentPart } from "component/part";
import { injectable } from "inversify";
import { BasePostModel } from "lib/model";
import * as KanjiList from "mdx/mdx-post-content";

@injectable()
export class KanjiPostRepository extends BasePostModel {
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
      title: `hán tự ${this.postId}`,
      keywords: [`hán tự ${this.postId}`, `Cách nhớ ${this.postId}`],
      description: `Cách nhớ ${this.postId}`,
      openGraph: {
        title: `hán tự ${this.postId}`,
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
        description: `hán tự ${this.postId}, cách nhớ ${this.postId}`,
      },
      educationalLevel: `n1`,
    };
  }
}
