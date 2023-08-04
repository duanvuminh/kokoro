import { Fragment, useState } from "react";
import { deletePostAdmin, editPostAdmin, userEditMean } from "lib/const/app-text-client-const";
import { DrawerPartClient, EditPostPartClient } from "component/part-client";
import { auth } from "lib/repository";
import { kyomoPostPostDataClient } from "lib/api/api_client";

export function AdminEditMeanPartClient({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClickSave = async () => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/edit-mean", {
      postId: postId,
      token: token,
    });
  };
  const onClickDelete = async () => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/delete-mean", {
      postId: postId,
      token: token,
    });
  };
  return (
    <Fragment>
      <button className="btn-text float-right" onClick={onClick}>
        <sub>{userEditMean}</sub>
      </button>
      <DrawerPartClient title={postId} open={open} setOpen={setOpen}>
        <EditPostPartClient postId={postId} postType={postType} />
        <button
          className="btn-text float-right"
          aria-label="save"
          onClick={onClickSave}
        >
          <sub>{editPostAdmin}</sub>
        </button>
        <button
          className="btn-text float-right"
          aria-label="delete"
          onClick={onClickDelete}
        >
          <sub>{deletePostAdmin}</sub>
        </button>
      </DrawerPartClient>
    </Fragment>
  );
}
