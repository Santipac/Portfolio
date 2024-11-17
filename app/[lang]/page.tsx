import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { LangParams } from '@/interfaces';
import { getTranslation } from '@/get-translation';
import { navigation } from '@/constants/navigation';
import { calSans } from '../fonts';
import { cn } from '@/util/classNames';

export default async function Home(props: LangParams) {
  const params = await props.params;

  const {
    lang
  } = params;

  const t = await getTranslation(lang);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 max-[375px]:gap-2">
          {navigation[lang].map(item => {
            if (item.href === '/') return;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'max-[375px]:text-sm  text-md duration-500 text-zinc-400 hover:text-zinc-400'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1
        className={`z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ${calSans.variable}`}
      >
        Santiago Pacini
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-10 text-center animate-fade-in px-4">
        <h2 className="text-sm text-zinc-400 font-sans">{t.home.brief}</h2>
      </div>
    </div>
  );
}
