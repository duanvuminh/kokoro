import { kyomoGetPostData } from "lib/api/api_server";
import { Fragment } from "react";

export async function MeanUtilsPart({
  id,
}: {
  id: string;
}): Promise<JSX.Element> {
  const content = await getData(id);
  return (
    <Fragment>
      <div className="whitespace-normal">{content}</div>
    </Fragment>
  );
}

async function getData(id: string) {
  const content = await kyomoGetPostData(`/api/mean?id=${id}`);
  return content.result;
}
