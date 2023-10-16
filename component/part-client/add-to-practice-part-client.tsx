import { PostModel } from "lib/model/post-model";
import { UserSettingRepository } from "lib/service/user-setting-repository";
import { Fragment, useEffect } from "react";

type Props = {
  id: string;
  postType: string;
};

export function AddToPracticePartClient({ id, postType }: Props) {
  useEffect(() => {
    UserSettingRepository.setPost(
      new PostModel({ postType: postType, id: id })
    );
    return () => {};
  }, []);
  return <Fragment></Fragment>;
}
