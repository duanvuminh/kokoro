import { PostModel } from "app/(subpage)/post/views/post-model";
import { UserSettingService } from "lib/service/user-setting-service";
import { Fragment, useEffect } from "react";

type Props = {
  id: string;
  postType: string;
};

export function AddToPracticePartClient({ id, postType }: Props) {
  useEffect(() => {
    UserSettingService.setPost(
      new PostModel({ postType: postType, id: id })
    );
    return () => {};
  }, []);
  return <Fragment></Fragment>;
}
