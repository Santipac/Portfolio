import { i18n } from '@/i18n-config';
import { calSans, inter } from '../fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import '../../globals.css';
import { englishMetadata, spanishMetadata } from '@/constants/metadata';

export async function generateMetadata(
  props: {
    params: Promise<{ lang: 'es' | 'en' }>;
  }
) {
  const params = await props.params;
  return params.lang === 'en' ? englishMetadata : spanishMetadata;
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  const {
    children
  } = props;

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
