import type { Metadata } from 'next'
import { container } from 'tsyringe';
import { PostClient, PostStaticPathClient } from 'lib/repository'
import { SummaryPart, BottomBackPart, JsonLd } from 'lib/part';

const pageClient:PostClient = container.resolve(PostClient)
const pagePathClient:PostStaticPathClient = container.resolve(PostStaticPathClient)

export const generateStaticParams = async () => {
    return pagePathClient.client.getAllPath()
}

export async function generateMetadata({ params }:{params: { id: string }}): Promise<Metadata> {
    const id = decodeURIComponent(params.id)
    return pageClient.client.getMetadata()
}

export default function Page({
    params,
}: {
    params: { id: string };
}) {
    const id = decodeURIComponent(params.id)
    pageClient.client.init(id)
    const jsonLd = pageClient.client.getJsonLd()
    const Content = pageClient.client.showDetail()
    const Summary = pageClient.client.summaryContent()
    return (
        <>
            <JsonLd jsonLd={jsonLd}/>
            <SummaryPart pageId={id}>
                <div>
                    <Summary/>
                </div>
            </SummaryPart>
            <Content/>
            <BottomBackPart/>
        </>
    )
}

