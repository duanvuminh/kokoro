import { DayInMonthPartClient } from "component/part-client";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
};

export function DayInMonthPart({ id, postType }: Props) {
  return (
    <Fragment>
      <DayInMonthPartClient id={id} postType={postType} />
    </Fragment>
  );
}
