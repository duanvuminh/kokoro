import { kyomoGetPostData } from "lib/api/api_server";
import { Fragment } from "react";

export async function MeanUtilsPart({
  postId,
}: {
  postId: string;
}): Promise<JSX.Element> {
  const content = await getData(postId);
  return (
    <Fragment>
      <div>{content}</div>
    </Fragment>
  );
}

async function getData(postId: string) {
  const content = await kyomoGetPostData(`/api/mean?postId=${postId}`);
  return content.result;
}
