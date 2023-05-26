import Link from 'next/link';
import { projects } from '@/constants/projects';
import { Eye } from 'lucide-react';
import { Article } from './article';
import { LangParams } from '@/interfaces';
import { Navigation } from '../components/navigation';
import { Card } from '../components/card';
import { getTranslation } from '@/get-translation';
export default async function ProjectsPage({ params: { lang } }: LangParams) {
  const t = await getTranslation(lang);

  return (
    <div className="relative pb-16">
      <Navigation lang={lang} />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-zinc-400">{t.projects.brief}</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={`/projects/${projects[lang][0].slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="w-full flex justify-end items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{' '}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {projects[lang][0].title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {projects[lang][0].brief}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    {t.projects.cta} <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {projects[lang].slice(1, 3).map(project => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
				</div> */}
      </div>
    </div>
  );
}
