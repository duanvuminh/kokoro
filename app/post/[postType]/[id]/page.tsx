import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostParameterModel } from "lib/model";
import { paths as kaniPath } from "mdx/mdx-kanji";
import { paths as kaniListPath } from "mdx/mdx-kanji-list";
import { paths as meanPath } from "mdx/mdx-mean";
import { paths as singlePagePath } from "mdx/mdx-single-page";
import { paths as wordListPath } from "mdx/mdx-word-list";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  const allkaniPath = getAllPath("kanji", kaniPath);
  const allwordListPath = getAllPath("word-list", wordListPath);
  const allkaniListPath = getAllPath("kanji-list", kaniListPath);
  const allSinglePagePath = getAllPath("kanji-list", singlePagePath);
  const allMeanPath = getAllPath("mean", meanPath);
  return [
    ...allkaniPath,
    ...allwordListPath,
    ...allkaniListPath,
    ...allSinglePagePath,
    ...allMeanPath,
  ];
};

export const generateMetadata = ({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}): Metadata => {
  const postId = decodeURIComponent(id);
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);

  const metadata = post.getMetadata();
  return metadata;
};

export default function Page({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}) {
  const postId = decodeURIComponent(id);

  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);

  const jsonLd = post.getJsonLd();
  const Content = post.showDetail();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <Content postId={postId} postType={postType} />
    </Fragment>
  );
}

function getAllPath(postType: string, paths: string[]): PostParameterModel[] {
  return paths.map((path) => new PostParameterModel(postType, path));
}
