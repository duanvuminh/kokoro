import Home, { metadata as meta,jsonLd } from 'lib/mdx/home.mdx';
import type { Metadata } from 'next'

export const metadata: Metadata = meta

export default function Page() {
  return (
    <>
        <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
        <Home/>
    </>
  )
}
