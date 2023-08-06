import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
  children:any;
};

export function SubjectRepositoryPart({
  postId,
  postType,
  children
}: Props): JSX.Element {
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const Content = post.getSource();
  return (
    <Fragment>
      {children}
      <Content />
    </Fragment>
  );
}
