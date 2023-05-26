'use client';
import { navigation } from '@/constants/navigation';
import { Locale } from '@/i18n-config';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  lang: Locale;
}

export const Navigation: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  console.log(pathname);
  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-4 sm:p-6 mx-auto">
          <div className="flex justify-between gap-4 sm:gap-8">
            {navigation[lang].map(nav => (
              <Link
                key={nav.name}
                href={nav.href}
                className={`duration-200 text-zinc-400 hover:text-zinc-100 ${
                  pathname === `/${lang}` + nav.href ? 'hidden' : 'flex'
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
