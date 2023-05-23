import { JsonLdPart } from "component/part";
import { myContainer } from "inversify.config";
import type {
  IPostRepository,
  IPostStaticPathRepository,
} from "lib/repository";
import { TYPES } from "@/lib/const";
import type { Metadata } from "next";
import { Fragment } from "react";

const postRepo = myContainer.get<IPostRepository>(TYPES.IPostRepository);
const staticPathRepo = myContainer.get<IPostStaticPathRepository>(
  TYPES.IPostStaticPathRepository
);

export const generateStaticParams = () => {
  return staticPathRepo.getAllPath();
};

export const generateMetadata = ({
  params: { id },
}: {
  params: { id: string };
}): Metadata => {
  const metadata = postRepo.getMetadata();
  return metadata;
};

export default function Page({ params: { id } }: { params: { id: string } }) {
  const pageId = decodeURIComponent(id);
  postRepo.init(pageId);
  const jsonLd = postRepo.getJsonLd();
  const Content = postRepo.showDetail();
  return (
    <Fragment>
      <JsonLdPart jsonLd={jsonLd} />
      <Content />
    </Fragment>
  );
}
