import { Navigation } from '../components/navigation';
import profile from '../../public/images/me.jpg';
import Image from 'next/image';

export default async function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            About
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          <div className="flex justify-center md:justify-start min-w-fit">
            <Image
              src={profile}
              alt="Image of myself"
              height={400}
              className="rounded-lg object-cover"
              quality={100}
            />
          </div>
          <section className="flex flex-col space-y-6">
            <article className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 self-center md:self-start">
                Santiago Pacini
              </h2>
              <h3 className="text-sm font-normal text-zinc-300 self-center md:self-start">
                Frontend Developer
              </h3>
            </article>
            <article className="flex flex-col space-y-2 w-full ">
              <p className="text-zinc-300 text-sm leading-7 text-center md:text-start">
                {' '}
                I&apos;m passionate about everything related to technology and
                innovation. I&apos;ve worked using agile methodologies such as
                Scrum or Kanban in different work environments.
              </p>
              <p className="text-zinc-300 text-sm leading-7 text-center md:text-start">
                {' '}
                I&apos;m currently learning about technologies such as tRPC,
                NextJS. Also I&apos;m taking a course of UX / UI Design.
              </p>
            </article>
            <article className="flex flex-col space-y-2 w-full md:w-3/4">
              <h3 className="text-3xl font-bold tracking-tight text-zinc-100 self-center md:self-start">
                Stack
              </h3>
              <ul className="list-outside list-none flex gap-4 flex-wrap justify-center md:justify-start text-sm text-zinc-300">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>ReduxJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>TailwindCSS</li>
                <li>TypeScript</li>
                <li>Prisma</li>
                <li>tRPC</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Firebase</li>
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
