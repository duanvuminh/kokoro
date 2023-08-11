import { AddToPractivePartClient } from "component/part-client";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
};

export function AddToPractivePart({ id, postType }: Props) {
  return (
    <Fragment>
      <AddToPractivePartClient id={id} postType={postType} />
    </Fragment>
  );
}
