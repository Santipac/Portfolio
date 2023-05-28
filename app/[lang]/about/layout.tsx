import { i18n } from '@/i18n-config';
import { calSans, inter } from '@/app/fonts';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}
export default function AboutLayout({
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
