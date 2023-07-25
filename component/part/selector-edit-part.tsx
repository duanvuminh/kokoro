import { SelectorEditPartClient } from "component/part-client";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
};

export async function SelectorEditPart({
  postId,
  postType,
}: Props): Promise<JSX.Element> {
  if (postId == undefined || postType == undefined) return <Fragment />;
  let postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  let post = postFactory.Create(postType, postId);
  const UserEdit = post.userEdit();
  const AdminEdit = post.adminEdit();
  return (
    <SelectorEditPartClient
      user={<UserEdit postId={postId} postType={postType}/>}
      admin={<AdminEdit postId={postId} postType={postType}/>}
    />
  );
}
