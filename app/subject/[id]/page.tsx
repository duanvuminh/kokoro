import type { Metadata } from 'next'
import { container } from 'tsyringe';
import { SubjectClient, SubjectStatiPathClient } from 'lib/repository'
import { BottomBackPart, JsonLd } from 'lib/part';

const pageClient:SubjectClient = container.resolve(SubjectClient)
let pagePathClient:SubjectStatiPathClient = container.resolve(SubjectStatiPathClient)

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
    return (
        <>
            <JsonLd jsonLd={jsonLd}/>
            <Content/>
            <BottomBackPart/>
        </>
    )
}

