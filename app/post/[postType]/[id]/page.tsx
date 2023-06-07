import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel, PostParameterModel } from "lib/model";
import type { } from "lib/repository";
import { paths } from "mdx/mdx-kanji";
import { paths as paths1 } from "mdx/mdx-kanji-list";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  const allPathsKanji = getAllPath("kanji", paths);
  const allPathsSubject = getAllPath("subject", paths1);
  return [...allPathsKanji, ...allPathsSubject];
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
      <Content />
    </Fragment>
  );
}

function getAllPath(postType: string, paths: string[]): PostParameterModel[] {
  return paths.map((path) => new PostParameterModel(postType, path));
}
