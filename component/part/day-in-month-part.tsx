import { DayInMonthPartClient } from "component/part-client";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
};

export function DayInMonthPart({ postId, postType }: Props) {
  return (
    <Fragment>
      <DayInMonthPartClient postId={postId} postType={postType} />
    </Fragment>
  );
}
