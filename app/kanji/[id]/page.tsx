import type { Metadata } from 'next'
import Link from 'next/link'
import { container } from 'tsyringe';
import { PostClient, PostListClient } from 'lib/repository'
import { SummaryPartClient } from 'lib/part/index-client';

const postClient:PostClient = container.resolve(PostClient)
let postListClient:PostListClient = container.resolve(PostListClient)

export const generateStaticParams = async () => {
    return postListClient.client.getAllPath()
}

export async function generateMetadata({ params }:{params: { id: string }}): Promise<Metadata> {
    const id = decodeURIComponent(params.id)
    return postClient.client.getMetadata()
}

export default function Page({
    params,
}: {
    params: { id: string };
}) {
    const id = decodeURIComponent(params.id)
    postClient.client.init(id)
    const jsonLd = postClient.client.getJsonLd()
    const Content = postClient.client.showDetail()
    const Summary = postClient.client.summaryContent()
    const title = postClient.client.summaryTitle()
    return (
        <>
            <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
            <SummaryPartClient name={id} title={title}>
                <Summary/>
            </SummaryPartClient>
            <Content/>
            <Link href="/">← Back to home</Link>
        </>
    )
}

