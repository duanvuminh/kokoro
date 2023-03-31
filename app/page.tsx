import { Home } from 'lib/mdx'
import type { Metadata } from 'next'


export const metadata: Metadata = Home.metadata

export default async function Page() {

  return (
    <>
        <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(Home.jsonLd)}}/>
        <Home.default/>
    </>
  )
}
