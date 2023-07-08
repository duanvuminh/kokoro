import { kyomoGetPostData } from "lib/api/api";

export async function MeanUtilsPart({
  postId,
}: {
  postId: string;
}): Promise<JSX.Element> {
  const content = await getData(postId);
  return <p>{content}</p>;
}

async function getData(postId: string) {
  const content = await kyomoGetPostData(`/api/mean?postId=${postId}`);
  return content.result;
}
