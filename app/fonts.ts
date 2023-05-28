import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

export const calSans = localFont({
    src: '../public/fonts/CalSans-SemiBold.ttf',
    variable: '--font-calsans',
  });
  export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
  });