import { Fragment, useState } from "react";
import { deletePostAdmin, editPostAdmin, userEditMean } from "lib/const/app-text-client-const";
import { DrawerPartClient, EditPostPartClient } from "app/component/part-client";
import { auth } from "lib/repository/firestore-repository";
import { kyomoPostPostDataClient } from "lib/repository/api/api_client";

export function AdminEditMeanPartClient({
  id,
  postType,
}: {
  id: string;
  postType: string;
}) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(true);
  };
  const onClickSave = async () => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/edit-mean", {
      id: id,
      token: token,
    });
  };
  const onClickDelete = async () => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/delete-mean", {
      id: id,
      token: token,
    });
  };
  return (
    <Fragment>
      <button className="btn-text float-right" onClick={onClick}>
        <sub>{userEditMean}</sub>
      </button>
      <DrawerPartClient title={id} open={open} setOpen={setOpen}>
        <EditPostPartClient id={id} postType={postType} />
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
