import Home from 'lib/mdx/home.mdx'
import type { Metadata } from 'next'

export async function generateMetadata({ params }:{params: { id: string }}): Promise<Metadata> {
  return (await import('lib/mdx/home.mdx') as any).metadata
}

export default async function Page() {
  const jsonLd = (await import('lib/mdx/home.mdx') as any).jsonLd;

  return (
    <>
        <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
        <Home/>
    </>
  )
}
