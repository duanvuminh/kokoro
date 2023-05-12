import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import type {
  ISubjectRepository,
  ISubjectStaticPathRepository,
} from "lib/repository";
import { TYPES } from "lib/type";
import type { Metadata } from "next";
import { Fragment } from "react";

const pageClient = myContainer.get<ISubjectRepository>(
  TYPES.ISubjectRepository
);
let pagePathClient = myContainer.get<ISubjectStaticPathRepository>(
  TYPES.ISubjectStaticPathRepository
);

export const generateStaticParams = () => {
  return pagePathClient.getAllPath();
};

export const generateMetadata = ({
  params,
}: {
  params: { id: string };
}): Metadata => {
  return pageClient.getMetadata();
};

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
