import { i18n } from '@/i18n-config';
import { calSans, inter } from '@/app/fonts';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}
export default async function ResumeLayout(
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
      <body className={inter.className}>
        <section
          className={`relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black`}
        >
          {children}
        </section>
      </body>
    </html>
  );
}
