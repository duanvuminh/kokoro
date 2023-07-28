import { DayInMonthPartClient } from "component/part-client";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
};

export async function SubjectRepositoryPart({
  postId,
  postType,
}: Props): Promise<JSX.Element> {
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const Content = post.getSource();
  return (
    <DayInMonthPartClient postId={postId} postType={postType} days={0}>
      <Content />
    </DayInMonthPartClient>
  );
}
