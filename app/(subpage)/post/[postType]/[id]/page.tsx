import { JsonLdPart } from "app/component/part";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryPage } from "app/(subpage)/post/page";
import { IInitService, RouterService } from "lib/service";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateStaticParams = () => {
  return RouterService.generateStaticParams();
};

export const generateMetadata = ({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}): Metadata => {
  const postId = decodeURIComponent(id);
  const postFactory = getContainer().get<IPostFactoryPage>(
    TYPES.IPostFactoryModel
  );
  const post = postFactory.Create(postType, postId);

  const metadata = post.getMetadata();
  return metadata;
};

export default function Page({
  params: { postType, id },
}: {
  params: { postType: string; id: string };
}) {
  const postId = decodeURIComponent(id);

  //init data
  const initRepository = getContainer().get<IInitService>(
    TYPES.IInitRepository
  );
  initRepository.init({ postType, id: postId });

  const postFactory = getContainer().get<IPostFactoryPage>(
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
