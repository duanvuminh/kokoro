import { EditPostPartClient } from "component/part-client";
import { indexAngolia } from "lib/repository";
import { trimMean } from "lib/util";
import { Metadata } from "next";
import { Fragment } from "react";

export const generateMetadata = ({
  params: { id },
}: {
  params: { id: string };
}): Metadata => {
  return {
    title: `Chỉnh sửa ${id}`,
    keywords: ["Chỉnh sửa"],
    description: "Chỉnh sửa",
    openGraph: {
      title: `Chỉnh sửa ${id}`,
      description: `Chỉnh sửa ${id}`,
      url: "https://kyomo.vercel.app/login",
      siteName: "Kokoro",
      type: "website",
    },
  };
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postId = decodeURIComponent(id);
  const angolia = await indexAngolia.getObjects([postId]);
  let text = "";
  if (angolia.results[0] != null) {
    text = trimMean(angolia.results[0].mean1 ?? angolia.results[0].mean ?? "");
  }
  return (
    <Fragment>
      <EditPostPartClient defaultValue={text} postId={postId} />
    </Fragment>
  );
}
