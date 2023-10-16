import { PostContentSummaryPart } from "component/part";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";
export function PostContentPart({
  id,
  postType,
  children
}: {
  id: string;
  postType: string;
  children:any;
}){
  if (id == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, id);
  const Content = post.getSource();
  return (
    <Fragment>
      {children}
      <PostContentSummaryPart id={id} />
      <Content />
    </Fragment>
  );
}
