import { calSans, inter } from "@/app/fonts";
import { i18n } from "@/i18n-config";

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
        <body className={inter.className}>{children}</body>
      </html>
    );
  }