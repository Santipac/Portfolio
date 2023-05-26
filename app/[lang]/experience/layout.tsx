import localFont from '@next/font/local';
import { Inter } from '@next/font/google';
import { i18n } from '@/i18n-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const calSans = localFont({
  src: '../../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function ExperienceLayout({
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
      <body className={inter.className}>
        <div
          className={`relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
