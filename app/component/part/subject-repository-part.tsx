import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryPage } from "app/(subpage)/post/page";
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
  let postFactory = getContainer().get<IPostFactoryPage>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, id);
  const Content = post.getSource();
  return (
    <Fragment>
      {children}
      <Content />
    </Fragment>
  );
}
