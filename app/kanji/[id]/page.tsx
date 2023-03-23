import type { Metadata } from 'next'
import Link from 'next/link'
import { container } from 'tsyringe';
import { PostClient, PostListClient } from 'lib/service'

export const generateStaticParams = async () => {
    const postListClient = container.resolve(PostListClient)
    return postListClient.client.getAllPath()
}

export async function generateMetadata({ params }:{params: { id: string }}): Promise<Metadata> {
    const id = decodeURIComponent(params.id)
    const postClient = container.resolve(PostClient)
    return postClient.client.getMetadata(id)
}

export default function Page({
    params,
}: {
    params: { id: string };
}) {
    const id = decodeURIComponent(params.id)
    const postClient = container.resolve(PostClient)
    const jsonLd = postClient.client.getJsonLd(id)
    const Content = postClient.client.showDetail(id)
    return (
        <>
            <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
            <Content/>
            <Link href="/">← Back to home</Link>
        </>
    )
}

