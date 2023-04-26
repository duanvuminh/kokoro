import type { Metadata } from "next";
import { Fragment } from "react";
import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import { TYPES } from "lib/type";
import {
  ISubjectRepository,
  ISubjectStaticPathRepository,
} from "lib/repository";

const pageClient = myContainer.get<ISubjectRepository>(
  TYPES.ISubjectRepository
);
let pagePathClient = myContainer.get<ISubjectStaticPathRepository>(
  TYPES.ISubjectStaticPathRepository
);

export const generateStaticParams = async () => {
  return pagePathClient.getAllPath();
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return pageClient.getMetadata();
}

export default function Page({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  pageClient.init(id);
  const jsonLd = pageClient.getJsonLd();
  const Content = pageClient.showDetail();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <Content />
    </Fragment>
  );
}
