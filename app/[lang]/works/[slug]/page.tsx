import Image from 'next/image';
import { MDXContent } from '@/app/[lang]/components/mdx-content';
import { getWorkPost, getWorkPosts } from '@/util/posts/work';
import { Header } from './header';

export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const posts = await getWorkPosts(lang);
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function WorkPost(props: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const params = await props.params;

  const { lang, slug } = params;

  const post = await getWorkPost(lang, slug);

  return (
    <section className="bg-zinc-50 min-h-screen">
      <Header work={post} />
      <article className="max-w-3xl mx-auto py-10 px-4 space-y-6">
        {post.image && (
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover !rounded-2xl"
            />
          </div>
        )}
        <section className='flex flex-wrap gap-1 items-center justify-between'>
          <h1 className="text-black text-4xl font-bold">{post.title}</h1>
          <time className="text-black block">
            {post.date}
          </time>
        </section>
        <MDXContent>{post.content}</MDXContent>
        <h2 className="text-black text-3xl font-bold">Stack</h2>
        <div className="flex flex-wrap items-center gap-2">
          {post.stack.map(tech => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-white text-zinc-900 rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
