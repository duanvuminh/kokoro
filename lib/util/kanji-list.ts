export function generateMetadataForKanjiList(id: string) {
  const contextText = id.length > 2 ? id : id[0];
  return {
    title: `Danh sách ${contextText} hán tự`,
    keywords: [`Danh sách ${contextText} hán tự, JLPT hán tự ${id[0]} list`],
    description: `Danh sách ${contextText} hán tự`,
    openGraph: {
      title: `Danh sách ${contextText} hán tự`,
      description: `Danh sách ${contextText} hán tự`,
      url: `https://kyomo.vercel.app/post/subject/${id}`,
      siteName: "Kokoro",
      type: "website",
    },
  };
}

export function generateJsonLDForKanjiList(id: string) {
  const contextText = id.length > 2 ? id : id[0];
  const contextLevel = id.length > 2 ? "all" : id[0];
  return {
    "@context": "https://schema.org",
    "@type": "TextDigitalDocument",
    about: {
      name: `Danh sách ${contextText}`,
      description: `Danh sách hán tự ${contextText}`,
    },
    educationalLevel: contextLevel,
  };
}
