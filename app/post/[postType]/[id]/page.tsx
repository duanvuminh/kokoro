import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostParameterModel } from "lib/model";
import { paths as kaniPath } from "mdx/mdx-kanji";
import { paths as kaniListPath } from "mdx/mdx-kanji-list";
import { paths as wordListPath } from "mdx/mdx-word-list";
import { paths as singlePagePath } from "mdx/mdx-single-page";
import { paths as meanPath } from "mdx/mdx-mean";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  const allkaniPath = getAllPath("kanji", kaniPath);
  const allwordListPath = getAllPath("word-list", wordListPath);
  const allkaniListPath = getAllPath("kanji-list", kaniListPath);
  const allSinglePagePath = getAllPath("kanji-list", singlePagePath);
  const allMeanPath = getAllPath("kanji-list", meanPath);
  return [
    ...allkaniPath,
    ...allwordListPath,
    ...allkaniListPath,
    ...allSinglePagePath,
    ...meanPath
  ];
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
