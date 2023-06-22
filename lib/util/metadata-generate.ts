export const generateMetadataHomePage =  {
  title: "Học tiếng nhật cùng kyo",
  keywords: ["JLPT, hán tự, ngữ pháp, từ vựng, nghe, đọc" ],
  description: "Học tiếng nhật mỗi ngày",
  openGraph: {
    title: "Học tiếng nhật cùng kyo",
    description: "Học tiếng nhật mỗi ngày",
    url: "https://kyomo.vercel.app/",
    siteName: "Kokoro",
    type: "website",
  },
};

export function generateMetadataForKanjiList(id: string) {
  const contextText = id.substring(0,2);
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
  const contextText = id.substring(0,2);
  return {
    "@context": "https://schema.org",
    "@type": "TextDigitalDocument",
    about: {
      name: `Danh sách ${contextText}`,
      description: `Danh sách hán tự ${contextText}`,
    },
    educationalLevel: contextText,
  };
}

export function generateMetadataForWordList(id: string) {
  const contextText = id.substring(0,2);
  return {
    title: `Danh sách ${contextText} từ vựng`,
    keywords: [`Danh sách ${contextText} từ vựng, JLPT từ vựng ${id[0]} list`],
    description: `Danh sách ${contextText} từ vựng`,
    openGraph: {
      title: `Danh sách ${contextText} từ vựng`,
      description: `Danh sách ${contextText} từ vựng`,
      url: `https://kyomo.vercel.app/post/subject/${id}`,
      siteName: "Kokoro",
      type: "website",
    },
  };
}

export function generateJsonLDForWordList(id: string) {
  const contextText = id.substring(0,2);
  return {
    "@context": "https://schema.org",
    "@type": "TextDigitalDocument",
    about: {
      name: `Danh sách ${contextText}`,
      description: `Danh sách từ vựng ${contextText}`,
    },
    educationalLevel: contextText,
  };
}
