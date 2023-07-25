import { Fragment, useState } from "react";
import { userEditMean } from "lib/const";
import { DrawerPartClient, EditPostPartClient } from "component/part-client";

export function UserEditMeanPartClient({
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
  return (
    <Fragment>
      <button className="btn-text float-right" onClick={onClick}>
        <sub>{userEditMean}</sub>
      </button>
      <DrawerPartClient title={postId} open={open} setOpen={setOpen}>
        <EditPostPartClient postId={postId} postType={postType}/>
      </DrawerPartClient>
    </Fragment>
  );
}
