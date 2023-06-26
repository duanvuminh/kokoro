import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostParameterModel } from "lib/model";
import { paths } from "mdx/mdx-kanji";
import { paths as paths2 } from "mdx/mdx-kanji-list";
import { paths as paths1 } from "mdx/mdx-word-list";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  const allPathsKanji = getAllPath("kanji", paths);
  const allPathsWordList = getAllPath("word-list", paths1);
  const allPathsKanjiList = getAllPath("kanji-list", paths2);
  return [...allPathsKanji, ...allPathsWordList, ...allPathsKanjiList];
};

export const generateMetadata = ({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}): Metadata => {
  const pageId = decodeURIComponent(id);
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, pageId);

  const metadata = post.getMetadata();
  return metadata;
};

export default function Page({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}) {
  const pageId = decodeURIComponent(id);

  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, pageId);

  const jsonLd = post.getJsonLd();
  const Content = post.showDetail();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <Content pageId={pageId} postType={postType} />
    </Fragment>
  );
}

function getAllPath(postType: string, paths: string[]): PostParameterModel[] {
  return paths.map((path) => new PostParameterModel(postType, path));
}
