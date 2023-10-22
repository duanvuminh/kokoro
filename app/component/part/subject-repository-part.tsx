import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "app/(subpage)/post/views";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
  children:any;
};

export function SubjectRepositoryPart({
  id,
  postType,
  children
}: Props): JSX.Element {
  if (id == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, id);
  const Content = post.getSource();
  return (
    <Fragment>
      {children}
      <Content />
    </Fragment>
  );
}
