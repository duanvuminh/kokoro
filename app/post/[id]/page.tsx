import type { Metadata } from "next";
import { myContainer } from "inversify.config";
import { Fragment } from "react";
import { JsonLdPart } from "component/part";
import { IPostRepository, IPostStaticPathRepository } from "lib/repository";
import { TYPES } from "lib/type";

const page = myContainer.get<IPostRepository>(TYPES.IPostRepository);
const pagePath = myContainer.get<IPostStaticPathRepository>(
  TYPES.IPostStaticPathRepository
);

export const generateStaticParams = async () => {
  return pagePath.getAllPath();
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return page.getMetadata();
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  const pageId = decodeURIComponent(id);
  page.init(pageId);
  const jsonLd = page.getJsonLd();
  const Content = page.showDetail();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <Content />
    </Fragment>
  );
}
