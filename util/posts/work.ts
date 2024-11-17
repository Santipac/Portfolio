import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WORK_DIR = path.join(process.cwd(), 'content/work');

export interface WorkPost {
  slug: string;
  title: string;
  brief: string
  stack: string[]
  url: string | undefined
  date: string;
  content: string;
  image?: string;
}

export async function getWorkPosts(lang: string): Promise<WorkPost[]> {
  const postsDirectory = path.join(WORK_DIR, lang);
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        brief: data.brief,
        stack: data.stack,
        url: data.url,
        content,
        image: data.image,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getWorkPost(lang: string, slug: string): Promise<WorkPost> {
  const fullPath = path.join(WORK_DIR, lang, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    brief: data.brief,
    url: data.url,
    date: data.date,
    stack: data.stack,
    content,
    image: data.image,
  };
}