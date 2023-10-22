import { paths as kaniPath } from "mdx/mdx-kanji";
import { paths as kaniListPath } from "mdx/mdx-kanji-list";
import { paths as singlePagePath } from "mdx/mdx-single-page";
import { paths as wordListPath } from "mdx/mdx-word-list";

class PostParameterModel {
  constructor(public postType: string, public id: string) {}
}

export class RouterService {
  static generateStaticParams(): PostParameterModel[] {
    // kanji/日
    const allkaniPath = this.getAllPath("kanji", kaniPath);
    // word-list/N5_day_1
    const allwordListPath = this.getAllPath("word-list", wordListPath);
    // kanji-list/N5_day_1
    const allkaniListPath = this.getAllPath("kanji-list", kaniListPath);
    // single-page/N5_day_1
    const allSinglePagePath = this.getAllPath("single-page", singlePagePath);
    // mean/日  done
    // learn-list/all
    // practice/日
    return [
      ...allkaniPath,
      ...allwordListPath,
      ...allkaniListPath,
      ...allSinglePagePath,
    ];
  }

  static getAllPath(postType: string, paths: string[]): PostParameterModel[] {
    return paths.map((path) => new PostParameterModel(postType, path));
  }
}
