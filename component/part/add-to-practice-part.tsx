import { AddToPracticePartClient } from "component/part-client";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
};

export function AddToPracticePart({ id, postType }: Props) {
  return (
    <Fragment>
      <AddToPracticePartClient id={id} postType={postType} />
    </Fragment>
  );
}
