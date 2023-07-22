import { kyomoPostPostDataClient } from "lib/api/api_client";
import { deletePostAdmin, editPostAdmin } from "lib/const";
import { auth } from "lib/repository";
import { Fragment } from "react";

export function EditPostPartClient({
  postId,
  defaultValue,
}: {
  postId: string;
  defaultValue: string;
}):JSX.Element {
  const onChange = async (event: any) => {
    kyomoPostPostDataClient("/api/user/edit-post", {
      postId: postId,
      value: event.target.value,
    });
  };
  const onClickSave = async (event: any) => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/edit-post", {
      postId: postId,
      value: event.target.value,
      token: token,
    });
  };
  const onClickDelete = async (event: any) => {
    const token = await auth.currentUser?.getIdToken();
    kyomoPostPostDataClient("/api/admin/delete-post", {
      postId: postId,
      value: event.target.value,
      token: token,
    });
  };
  return (
    <Fragment>
      <textarea
        rows={10}
        className="w-full"
        defaultValue={defaultValue}
        onChange={onChange}
      />
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
    </Fragment>
  );
}
