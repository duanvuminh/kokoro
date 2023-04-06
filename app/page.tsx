import { Home } from 'mdx/mdx-page'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'


export const metadata: Metadata = Home.metadata

export default function Page() {
  const N1 = dynamic(() => import('mdx/mdx-page/n1.mdx'))
  const N2 = dynamic(() => import('mdx/mdx-page/n2.mdx'))
  const N3 = dynamic(() => import('mdx/mdx-page/n3.mdx'))
  const N4 = dynamic(() => import('mdx/mdx-page/n4.mdx'))
  return (
    <>
        <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(Home.jsonLd)}}/>
        <Home.default/>
        <N4/>
        <N3/>
        <N2/>
        <N1/>
    </>
  )
}
