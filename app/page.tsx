import Home from 'lib/mdx/home.mdx'
import type { Metadata } from 'next'

import { metadata as meta, jsonLd } from 'lib/mdx/home.mdx'

export const metadata: Metadata = meta

export default async function Page() {

  return (
    <>
        <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
        <Home/>
    </>
  )
}
