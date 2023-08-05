import { DayInMonthPartClient } from "component/part-client";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
};

export function SubjectRepositoryPart({
  postId,
  postType,
}: Props): JSX.Element {
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const Content = post.getSource();
  return (
    <Fragment>
      <DayInMonthPartClient postId={postId} postType={postType} />
      <Content />
    </Fragment>
  );
}
