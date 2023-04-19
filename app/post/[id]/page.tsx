import type { Metadata } from "next";
import { container } from "tsyringe";
import { PostClient, PostStaticPathClient } from "lib/repository";
import { SummaryPart, BottomBackPart, JsonLd } from "component/part";
import { EnableNavBackPart } from "component/part-client";

const pageClient: PostClient = container.resolve(PostClient);
const pagePathClient: PostStaticPathClient =
  container.resolve(PostStaticPathClient);

export const generateStaticParams = async () => {
  return pagePathClient.client.getAllPath();
};

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata>  {
  return pageClient.client.getMetadata();
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  const pageId = decodeURIComponent(id);
  pageClient.client.init(pageId);
  const jsonLd = pageClient.client.getJsonLd();
  const Content = pageClient.client.showDetail();
  const Summary = pageClient.client.summaryContent();
  return (
    <>
      <EnableNavBackPart />
      <JsonLd jsonLd={jsonLd} />
      <SummaryPart pageId={pageId}>
        <div>
          <Summary />
        </div>
      </SummaryPart>
      <Content />
      <BottomBackPart />
    </>
  );
}
