import { Navigation } from '../components/navigation';
import profile from '../../../public/images/me.jpg';
import Image from 'next/image';
import { getTranslation } from '@/get-translation';
import { LangParams } from '@/interfaces';

export default async function AboutPage({ params: { lang } }: LangParams) {
  const t = await getTranslation(lang);
  return (
    <div className="relative pb-16">
      <Navigation lang={lang} />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          {t.about.title}
        </h2>

        <div className="w-full h-px bg-zinc-800" />

        <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          <div className="flex justify-center md:justify-start min-w-fit">
            <Image
              src={profile}
              alt={t.about.imageAlt}
              height={400}
              className="rounded-lg object-cover"
              quality={100}
              priority={true}
              placeholder="blur"
            />
          </div>
          <section className="flex flex-col space-y-6">
            <article className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 self-center md:self-start">
                Santiago Pacini
              </h2>
              <h3 className="text-sm font-normal text-zinc-300 self-center md:self-start">
                {t.about.profession}
              </h3>
            </article>
            <article className="flex flex-col space-y-2 w-full ">
              <p className="text-zinc-300 text-sm leading-7 text-center md:text-start">
                {t.about.firstParagraph}
              </p>
              <p className="text-zinc-300 text-sm leading-7 text-center md:text-start">
                {t.about.secondParagraph}
              </p>
            </article>
            <article className="flex flex-col space-y-2 w-full md:w-3/4">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-100 self-center md:self-start">
                Stack
              </h3>
              <ul className="list-outside list-none flex gap-4 flex-wrap justify-center md:justify-start text-sm text-zinc-300">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>ReactJS</li>
                <li>AstroJS</li>
                <li>NextJS</li>
                <li>ReduxJS</li>
                <li>Zustand</li>
                <li>TailwindCSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React Query</li>
                <li>Material UI</li>
                <li>Prisma</li>
                <li>tRPC</li>
                <li>NodeJS</li>
                <li>NestJS</li>
                <li>Git</li>
                <li>Figma</li>
              </ul>
            </article>
          </section>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
