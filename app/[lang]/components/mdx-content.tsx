'use client';

import Markdown from 'markdown-to-jsx';

export function MDXContent({ children }: { children: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: 'h1',
            props: { className: 'text-black text-4xl font-bold my-6' },
          },
          h2: {
            component: 'h2',
            props: { className: 'text-black text-3xl font-bold my-6' },
          },
          h3: {
            component: 'h3',
            props: { className: 'text-black text-2xl font-bold my-6' },
          },
          p: { component: 'p', props: { className: 'mb-4 text-gray-600' } },
          a: {
            component: 'a',
            props: { className: 'text-primary hover:underline text-black ' },
          },
          ul: { component: 'ul', props: { className: 'list-disc pl-6 my-6 text-gray-600' } },
          ol: {
            component: 'ol',
            props: { className: 'text-gray-600 list-decimal pl-6 my-6' },
          },
          code: {
            component: 'code',
            props: { className: 'text-orange-400 px-1.5 py-0.5 rounded' },
          },
          pre: {
            component: 'pre',
            props: {
              className: 'bg-zinc-800 rounded-xl p-4 rounded-lg my-6 overflow-x-auto',
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
}
