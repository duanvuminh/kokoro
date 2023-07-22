import { myContainer } from "inversify.config";
import { TYPES } from "lib/const";
import { IPostFactoryModel } from "lib/model";

export function DistributePart({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}) {
  const postFactory = myContainer.get<IPostFactoryModel>(TYPES.IPostFactoryModel);
  const post = postFactory.Create(postType, postId);
  return post.userEdit;
}
