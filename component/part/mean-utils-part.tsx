import { postData } from "lib/api";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}): Promise<JSX.Element> {
  let host = "http://localhost:3000";
  if (process.env.VERCEL_URL != undefined) {
    host = `https://${process.env.VERCEL_URL}`;
  }
  const content = await postData(`${host}/api/mean`, {
    pageId: pageId,
  });
  return <p>{content?.result}</p>;
}
