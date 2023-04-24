import type { Metadata } from "next";
import { container } from "tsyringe";
import { PostClient, PostStaticPathClient } from "lib/repository";
import { JsonLd } from "component/part";
import { EnableNavBackPart } from "component/part-client";
import { Fragment } from "react";

const pageClient: PostClient = container.resolve(PostClient);
const pagePathClient: PostStaticPathClient =
  container.resolve(PostStaticPathClient);

export const generateStaticParams = async () => {
  return pagePathClient.client.getAllPath();
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return pageClient.client.getMetadata();
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  const pageId = decodeURIComponent(id);
  pageClient.client.init(pageId);
  const jsonLd = pageClient.client.getJsonLd();
  const Content = pageClient.client.showDetail();
  return (
    <Fragment>
      <EnableNavBackPart />
      <JsonLd jsonLd={jsonLd} />
      <Content />
    </Fragment>
  );
}
