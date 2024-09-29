import Image from 'next/image';
import Link from 'next/link';
import profile from '../../../public/images/me.jpg';
import FiverrIcon from '../assets/svgs/media/fiverr-icon';
import LinkedinIcon from '../assets/svgs/media/linkedin-icon';
import { calSans } from '@/app/fonts';
import { getTranslation } from '@/get-translation';
import { Navigation } from '../components/navigation';
import { Github, Globe } from 'lucide-react';
import { LangParams } from '@/interfaces';
import { experience } from '@/constants/experience';
import { certifications } from '@/constants/certifications';
import { BorderBeam } from '../components/borderBeam';
import UdemyIcon from '../assets/svgs/media/udemy-icon';
import { backend, frontend, tools } from '@/constants/stack';
import devtallesLogo from '@/app/[lang]/assets/images/devtalles-logo.png';

export default async function ResumePage({ params: { lang } }: LangParams) {
  const t = await getTranslation(lang);

  return (
    <section className="h-full relative py-16">
      <Navigation lang={lang} />

      <section className="px-6 pt-10 mx-auto space-y-8 max-w-5xl lg:px-8 lg:pt-12">
        <main className="grid grid-cols-1 auto-rows-min gap-12">
          <section className="w-full flex flex-col items-center gap-6">
            <Image
              src={profile}
              alt={t.about.imageAlt}
              className="rounded-full object-contain h-56 lg:h-64 w-fit"
              quality={100}
              priority={true}
              placeholder="blur"
            />
            <h1
              className={`text-4xl font-extrabold tracking-tight text-zinc-100 lg:text-5xl ${calSans.variable}`}
            >
              Santiago Pacini
            </h1>
            <article className="flex items-center gap-2">
              <Link
                href="https://github.com/Santipac"
                className="inline-flex items-center w-fit px-2 py-1  text-neutral-400 hover:text-neutral-300 transition-colors duration-300 gap-2 rounded group text-sm"
              >
                <Github className="h-7 w-7 m-0 p-0" />
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/santiagopacinidev/"
                className="inline-flex items-center w-fit px-2 py-1  text-neutral-400 hover:text-blue-400 transition-colors duration-300 gap-2 rounded group text-sm"
              >
                <LinkedinIcon className="h-7 w-7 m-0 p-0" />
                Linkedin
              </Link>
              <Link
                href="https://www.fiverr.com/santipac"
                className="inline-flex items-center w-fit px-2 py-1 text-neutral-400  hover:text-emerald-400 transition-colors duration-300 gap-2 rounded group text-sm"
              >
                <FiverrIcon className="h-7 w-7 m-0 p-0" />
                Fiverr
              </Link>
            </article>
          </section>

          {/* About */}
          <article className="flex flex-col lg:flex-row w-full gap-2">
            <section className="w-full lg:w-1/5">
              <h2 className="text-xl font-semibold font-sans">
                {t.links.about}
              </h2>
            </section>
            <section className="w-full lg:w-4/5 space-y-2">
              <p className="text-zinc-300 text-sm font-light leading-7">
                {t.about.firstParagraph}
              </p>
              <p className="text-zinc-300 text-sm font-light leading-7 ">
                {t.about.secondParagraph}
              </p>
            </section>
          </article>

          {/* Stack */}
          <article className="flex flex-col lg:flex-row w-full gap-4">
            <section className="w-full lg:w-1/5">
              <h2 className="text-xl font-semibold font-sans w-fit">
                {t.links.stack}
              </h2>
            </section>
            <section className="w-full lg:w-4/5 space-y-4">
              <p className="text-zinc-300 text-sm font-light leading-7">
                {t.stack.description}
              </p>
              <article className="flex flex-wrap gap-2">
                {frontend.map(tec => (
                  <span
                    key={tec.label}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm shadow-md"
                  >
                    {tec.label}
                  </span>
                ))}
                {backend.map(tec => (
                  <span
                    key={tec.label}
                    className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-sm shadow-md"
                  >
                    {tec.label}
                  </span>
                ))}
                {tools.map(tec => (
                  <span
                    key={tec.label}
                    className="px-2 py-1 bg-zinc-500/20 text-zinc-400 rounded-full text-sm shadow-md"
                  >
                    {tec.label}
                  </span>
                ))}
              </article>
            </section>
          </article>

          {/* Experience */}
          <article className="flex flex-col lg:flex-row w-full gap-2">
            <section className="w-full lg:w-1/5">
              <h2 className="text-xl font-semibold font-sans">
                {t.links.experience}
              </h2>
            </section>
            <section className="w-full lg:w-4/5 space-y-2 grid grid-cols-1 auto-rows-min gap-6">
              {experience[lang].map((exp, i) => (
                <article key={i} className="flex gap-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="rounded object-contain h-11 w-11 mt-1 hidden lg:block"
                  />
                  <section className="relative border border-neutral-800 bg-neutral-900 p-4 flex flex-col rounded-xl w-full gap-3 shadow-md">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="rounded object-contain h-11 w-11 mt-1 lg:hidden"
                    />
                    <article className="flex items-center gap-2">
                      <h2 className="text-xl  font-semibold tracking-tighter text-zinc-100 truncate">
                        {exp.company}
                      </h2>
                      {exp.link && (
                        <Link href={exp.link} className="w-fit" target="_blank">
                          <Globe className="h-5 w-5 text-neutral-400 hover:text-neutral-200 duration-300 transition-colors" />
                        </Link>
                      )}
                    </article>
                    <article className="flex flex-col min-[500px]:flex-row justify-between min-[500px]:items-center">
                      <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                        {exp.position}
                      </h2>
                      <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                        {exp.time}
                      </h2>
                    </article>
                    <p className="text-zinc-200 text-xs min-[500px]:text-sm">
                      {exp.description}
                    </p>
                    <ul className="list-disc text-xs min-[500px]:text-sm text-zinc-400 space-y-4 px-4">
                      {exp.task.map(task => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </section>
                </article>
              ))}
            </section>
          </article>

          {/* Certifications */}
          <article className="flex flex-col lg:flex-row w-full gap-2">
            <section className="w-full lg:w-1/5">
              <h2 className="text-xl font-semibold font-sans">
                {t.links.certifications}
              </h2>
            </section>
            <section className="w-full lg:w-4/5 space-y-2 grid grid-cols-1 auto-rows-min gap-6">
              {certifications[lang].map((cert, i) => (
                <article key={i} className="flex gap-4 w-full">
                  <span className="hidden lg:block mt-1  h-11 w-11">
                    {cert.platform === 'udemy' && (
                      <UdemyIcon className="rounded bg-white p-1 w-full h-full" />
                    )}
                    {cert.platform === 'devtalles' && (
                      <Image
                        src={devtallesLogo.src}
                        alt="devtalles logo"
                        height={45}
                        width={45}
                        className="bg-white rounded object-contain w-11"
                      />
                    )}
                  </span>

                  <Link
                    href={cert.link}
                    className="relative border border-neutral-800 bg-neutral-900 p-4 flex flex-col rounded-xl w-full gap-3 shadow-md hover:border-neutral-600 transition-colors duration-300 overflow-hidden"
                    target="_blank"
                  >
                    <BorderBeam colorFrom="#171717" colorTo="#f4f4f5" />
                    <span className=" lg:hidden  mt-1">
                      <UdemyIcon className="rounded bg-white p-1 h-11 w-11" />
                    </span>
                    <h2 className="text-xl font-semibold tracking-tighter text-zinc-100 truncate">
                      {cert.title}
                    </h2>
                    <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                      {cert.description}
                    </h2>
                    <article className="flex justify-between items-center">
                      <p className="text-zinc-400 text-sm uppercase font-medium">
                        {cert.platform}
                      </p>
                      <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                        {cert.expeditionDate}
                      </h2>
                    </article>
                  </Link>
                </article>
              ))}
            </section>
          </article>
        </main>
      </section>
    </section>
  );
}
