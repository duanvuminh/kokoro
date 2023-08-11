import { PostModel } from "lib/model/post-model";
import { UserSettingRepository } from "lib/repository/user-setting-repository";
import { Fragment, useEffect } from "react";

type Props = {
  id: string;
  postType: string;
};

export function AddToPractivePartClient({ id, postType }: Props) {
  useEffect(() => {
    UserSettingRepository.setPost(
      new PostModel({ postType: postType, id: id })
    );
    return () => {};
  }, []);
  return <Fragment></Fragment>;
}
