import { postData } from "lib/api";

export async function MeanUtilsPart({
  pageId,
}: {
  pageId: string;
}): Promise<JSX.Element> {
  const host = process.env.VERCEL_URL ?? "http://localhost:3000";
  const content = await postData(`${host}/api/mean`, {
    pageId: pageId,
  });
console.log(content);
  return <p>{content?.result}</p>;
}
