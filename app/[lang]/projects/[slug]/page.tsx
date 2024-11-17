import { projects } from '@/constants/projects';
import { Header } from './header';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Locale } from '@/i18n-config';
import { getTranslation } from '@/get-translation';
type PropsParams = {
  params: {
    slug: string;
  };
};

interface Props {
  params: Promise<{
    slug: string;
    lang: Locale;
  }>;
}
export async function generateStaticParams(): Promise<PropsParams['params'][]> {
  const projectsES = projects.es.map(project => ({ slug: project.slug }));
  const projectsEN = projects.en.map(project => ({ slug: project.slug }));
  return [...projectsEN, ...projectsES];
}
export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = params?.slug;
  const project = projects[params.lang].find(project => project.slug === slug);

  if (!project) {
    notFound();
  }
  const t = await getTranslation(params.lang);
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div className="flex flex-col">
          {project.image && (
            <Image
              src={project.image}
              alt={`image ilustration of project ${project.title}`}
              className="rounded border object-fill"
            />
          )}
          <p className="leading-7">{project.description}</p>
          <p className="leading-7">
            {params.lang === 'es'
              ? 'Algunas de las tecnologías que utilice en este proyecto:'
              : 'Some of the technologies used in this project'}
          </p>
          <ul className="p-0 m-0 list-none flex gap-2 flex-wrap text-sm text-zinc-300">
            {project.stack.map(tec => (
              <li key={tec}  className="px-4 py-1.5 bg-white text-zinc-900 rounded-full text-sm shadow-sm">
                {tec}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
