import { SelectorEditPartClient } from "app/component/part-client";
import { getContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryPage } from "app/(subpage)/post/page";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
};

export function SelectorEditPart({
  id,
  postType,
}: Props): JSX.Element {
  if (id == undefined || postType == undefined) return <Fragment />;
  let postFactory = getContainer().get<IPostFactoryPage>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, id);
  const UserEdit = post.userEdit();
  const AdminEdit = post.adminEdit();
  return (
    <SelectorEditPartClient
      user={<UserEdit id={id} postType={postType}/>}
      admin={<AdminEdit id={id} postType={postType}/>}
    />
  );
}
