import '../globals.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Santiago Pacini | Portfolio',
  description: 'Frontend Developer at Distrisuper with Full-Stack knowledge',
  openGraph: {
    title: 'Santiago Pacini | Portfolio',
    description: 'Frontend Developer at Distrisuper with Full-Stack knowledge',
    url: 'https://santiagopacini.vercel.app',
    siteName: 'santiagopacini.vercel.app',
    type:'website',
    locale: "en-US",
  },
  robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};
const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
