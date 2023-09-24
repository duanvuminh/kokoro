import { JsonLdPart } from "component/part";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { PostRouterRepository } from "lib/repository";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  return PostRouterRepository.generateStaticParams();
};

export const generateMetadata = ({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}): Metadata => {
  const postId = decodeURIComponent(id);
  let postFactory = getContainer().get<IPostFactoryModel>(
    TYPES.IPostFactoryModel
  );
  let post = postFactory.Create(postType, postId);

  const metadata = post.getMetadata();
  return metadata;
};

export default function Page({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}) {
  //init data
  const postId = decodeURIComponent(id);

  let postFactory = getContainer().get<IPostFactoryModel>(
    TYPES.IPostFactoryModel
  );
  let post = postFactory.Create(postType, postId);

  const jsonLd = post.getJsonLd();
  const Content = post.content();
  const SelectorEdit = post.selectorEdit();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <div className="flex flex-col">
        <div className="grow">
          <Content id={postId} postType={postType} />
        </div>
        <div className="grow float-right">
          <SelectorEdit id={postId} postType={postType} />
        </div>
      </div>
    </Fragment>
  );
}
