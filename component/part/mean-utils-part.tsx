import { kyomoFetchPage } from "lib/api";

export async function MeanUtilsPart({
  postId,
}: {
  postId: string;
}): Promise<JSX.Element> {
  const content = await getData(postId);
  return <p>{content}</p>;
}

async function getData(postId: string) {
  const content = await kyomoFetchPage(`/api/mean?postId=${postId}`);
  return content.result;
}
