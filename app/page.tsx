import Home from './mdx/home.mdx';
import type { Metadata } from 'next'
import path from 'path'
import fs from 'fs'

export const metadata: Metadata = {
  title: 'Danh sách n5 kanji',
  keywords: ["n5", "kanji", "Tiếng nhật"],
  description: 'Danh sách n5 kanji,漢字 list',
  openGraph: {
    title: 'Danh sách n5 kanji',
    description: 'Danh sách n5 kanji',
    url: 'https://kokoro-silk.vercel.app/',
    siteName: 'Kokoro',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TextDigitalDocument',
    about: "Danh sách kanji n5",
    educationalLevel: "n5"
  }

  return (
    <>
      <script type= "application/ld+json" dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
      <Home/>
    </>
  )
}
