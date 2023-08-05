import { PostContentSummaryPart } from "component/part";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";
export function PostContentPart({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}){
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const Content = post.getSource();
  return (
    <Fragment>
      <PostContentSummaryPart postId={postId} />
      <Content />
    </Fragment>
  );
}
