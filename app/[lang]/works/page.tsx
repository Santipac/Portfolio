import { getTranslation } from '@/get-translation';
import { getWorkPosts } from '@/util/posts/work';
import { Navigation } from '../components/navigation';
import { Card } from '../components/card';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function WorkPage(props: {
  params: Promise<{ lang: 'es' | 'en' }>;
}) {
  const params = await props.params;

  const { lang } = params;

  const t = await getTranslation(lang);
  const posts = await getWorkPosts(lang);

  return (
    <section className="relative pb-16">
      <Navigation lang={lang} />
      <section className="px-6 pt-24 mx-auto space-y-8 max-w-5xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {t.works.title}
          </h2>
          <p className="mt-4 text-zinc-400">{t.works.brief}</p>
        </section>

        <section className="w-full h-px bg-zinc-800" />

        <section className="grid gap-4">
          {posts.map(post => (
            <Card key={post.title}>
              <Link href={`/${lang}/works/${post.slug}`}>
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
                    {post.title}
                  </h2>
                  <p className="my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {post.brief}
                  </p>
                  <div className="bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      {t.projects.cta} <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </section>
        <section className="hidden w-full h-px md:block bg-zinc-800" />
      </section>
    </section>
  );
}
