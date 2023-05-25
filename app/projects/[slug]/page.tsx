import { projects } from '@/constants/projects';
import { Header } from './header';
import { notFound } from 'next/navigation';
import Image from 'next/image';
type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return projects.map(project => ({ slug: project.slug }));
}
export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = projects.find(project => project.slug === slug);

  if (!project) {
    notFound();
  }

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
            Some of the technologies used in this project:
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            {project.stack.map(tec => (
              <span
                key={tec}
                className="bg-zinc-100 text-zinc-800 px-4 py-1 rounded-full"
              >
                {tec}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
