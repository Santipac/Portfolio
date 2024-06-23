import { i18n } from '@/i18n-config';
import { Metadata } from 'next';
import { calSans, inter } from '../fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import og from '@/public/og.png';
import '../../globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://santiagopacini.vercel.app'),
  title: 'Santiago Pacini | Portfolio',
  description: 'Desarrollador Frontend con conocimientos Full-Stack',
  openGraph: {
    title: 'Santiago Pacini | Portfolio',
    description: 'Desarrollador Frontend con conocimientos Full-Stack',
    url: 'https://santiagopacini.vercel.app',
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
    canonical: 'https://santiagopacini.vercel.app',
    languages: {
      es: 'https://santiagopacini.vercel.app/es',
      en: 'https://santiagopacini.vercel.app/en',
    },
  },
  category: 'programming',
};
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      className={[inter.variable, calSans.variable].join(' ')}
    >
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
