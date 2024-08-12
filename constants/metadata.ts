import { Metadata } from "next";
import og from '@/public/og.png';

export const spanishMetadata: Metadata = {
    metadataBase: new URL('https://santiagopacini.com'),
    title: 'Santiago Pacini | Portfolio',
    description: 'Desarrollador Frontend con conocimientos Full-Stack',
    openGraph: {
      title: 'Santiago Pacini | Portfolio',
      description: 'Desarrollador Frontend con conocimientos Full-Stack',
      url: 'https://santiagopacini.com',
      siteName: 'santiagopacini.vercel.app',
      type: 'website',
      images: [
        {
          url: og.src,
          width: 1920,
          height: 1080,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: 'Santiago Pacini',
      card: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://santiagopacini.com',
      languages: {
        es: 'https://santiagopacini.com/es',
        en: 'https://santiagopacini.com/en',
      },
    },
    category: 'programación, desarrollo web, frontend, full-stack',
  };

  export const englishMetadata: Metadata = {
    metadataBase: new URL('https://santiagopacini.com'),
    title: 'Santiago Pacini | Portfolio',
    description: 'Frontend Developer with Full-Stack knowledge',
    openGraph: {
      title: 'Santiago Pacini | Portfolio',
      description: 'Frontend Developer with Full-Stack knowledge',
      url: 'https://santiagopacini.com',
      siteName: 'santiagopacini.vercel.app',
      type: 'website',
      images: [
        {
          url: og.src,
          width: 1920,
          height: 1080,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: 'Santiago Pacini',
      card: 'summary_large_image',
    },
    alternates: {
      canonical: 'https://santiagopacini.com',
      languages: {
        es: 'https://santiagopacini.com/es',
        en: 'https://santiagopacini.com/en',
      },
    },
    category: 'programming, web development, frontend, full-stack',
};
