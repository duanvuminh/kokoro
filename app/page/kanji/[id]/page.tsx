import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getAllPostIds } from '../../../repository/post'

export default function Page({
    params,
}: {
    params: { id: string };
}) {
    const DynamicComponent = dynamic(() =>
        import(`../../../mdx/kanji/${decodeURIComponent(params.id)}.mdx`)
    )
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TextDigitalDocument',
        about: `kanji ${params.id}`,
        educationalLevel: "n5"
      }
    return (
        <>
            <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
            <DynamicComponent/>
            <Link href="/">← Back to home</Link>
        </>
    )
}

export const generateStaticParams = async () => {
    const paths = getAllPostIds()
    return paths.map((post) => ({
      id: post.id,
    }));
}

export async function generateMetadata({ params }:{params: { id: string }}): Promise<Metadata> {
    const title = decodeURIComponent(params.id);
    return {
        title: title,
        keywords: ["n5", "kanji", "Tiếng nhật"],
        description: `Cách nhớ ${title}`,
        openGraph: {
          title: title,
          description: `Cách nhớ ${title}`,
          url: `https://kokoro-silk.vercel.app/page/kanji/${title}`,
          siteName: 'Kokoro',
          type: 'website',
        },
     }
  }

