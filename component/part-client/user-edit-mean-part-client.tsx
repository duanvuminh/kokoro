import { Fragment, useState } from "react";
import { userEditMean } from "lib/const/app-text-client-const";
import { DrawerPartClient, EditPostPartClient } from "component/part-client";

export function UserEditMeanPartClient({
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
  return (
    <Fragment>
      <button className="btn-text float-right" onClick={onClick}>
        <sub>{userEditMean}</sub>
      </button>
      <DrawerPartClient title={id} open={open} setOpen={setOpen}>
        <EditPostPartClient id={id} postType={postType}/>
      </DrawerPartClient>
    </Fragment>
  );
}
