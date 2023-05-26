import { experience } from '@/constants/experience';
import { Navigation } from '../components/navigation';
import { LangParams } from '@/interfaces';
import { getTranslation } from '@/get-translation';
export default async function ExperiencePage({ params: { lang } }: LangParams) {
  const t = await getTranslation(lang);
  return (
    <div className="relative pb-16">
      <Navigation lang={lang} />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {t.experience.title}
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <section className="flex flex-col space-y-8 md:space-y-16">
          {experience[lang].map(exp => (
            <>
              <article className="flex flex-col space-y-4" key={exp.company}>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    {exp.company}
                  </h2>
                  <div className="flex justify-between items-center">
                    <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                      {exp.position}
                    </h2>
                    <h2 className="text-zinc-400 text-xs min-[500px]:text-sm">
                      {exp.time}
                    </h2>
                  </div>
                </div>

                <p className="text-zinc-200 text-sm min-[500px]:text-lg">
                  {exp.description}
                </p>
                <ul className="list-disc text-xs min-[500px]:text-sm text-zinc-400 space-y-4 px-4">
                  {exp.task.map(task => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
              <div className="hidden w-full h-px md:block bg-zinc-800" />
            </>
          ))}
        </section>
      </div>
    </div>
  );
}
