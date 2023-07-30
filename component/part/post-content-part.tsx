import { PostContentSummaryPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";
export async function PostContentPart({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}): Promise<JSX.Element> {
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const Content = post.getSource();
  return (
    <Fragment>
      <PostContentSummaryPart postId={postId} />
      <Content />
    </Fragment>
  );
}
