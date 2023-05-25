import { IProject } from '@/interfaces/projects';
import CS_Image from '../public/images/Store_Image.png';
import Twitter_Image from '../public/images/Twitter_Image.png';
import Kanban_Image from '../public/images/Kanban_Image.png';
export const projects: IProject[] = [
  {
    slug: 'cs_store',
    title: 'CS Store',
    brief:
      'The project is based on the sale of CSGO items. I opted to use the T3 STack focusing on simplicity, modularity and type-safe development.',
    image: CS_Image,
    description:
      "The idea of developing this store was driven to learn about several technologies that I didn't know until the moment of making the application. I used the game as a niche to avoid making a typical clothing store, besides being one of my favorite games.",
    stack: [
      'NextJS',
      'Next Auth',
      'Zustand',
      'React Table',
      'React Query',
      'TailwindCSS',
      'Radix UI',
      'AWS S3',
      'Zod',
      'TypeScript',
      'PrismaORM',
      'tRPC',
      'CockRoachDB',
    ],
    url: 'https://cs-store-arg.vercel.app/',
    repository: 'https://github.com/Santipac/CS-Store',
  },
  {
    slug: 'twitter_clone',
    title: 'Twitter UI',
    brief:
      'Twitter UI Clone with minimal functionalities such as follow users, create tweets and see profiles pages.',
    image: Twitter_Image,
    description:
      'I made this project in order to learn more about technologies such as Radix UI, tRPC, react-query, and others. I liked the idea of making a Twitter Clone because I could understand how these technologies work by making minimal functionalities.',
    stack: [
      'NextJS',
      'tRPC',
      'React Query',
      'TailwindCSS',
      'Zod',
      'TypeScript',
      'Radix UI',
      'Next Auth',
      'MySQL',
      'PrismaORM',
      'Stripe',
    ],
    url: 'https://twitter-clone-santipac.vercel.app/',
    repository: 'https://github.com/Santipac/twitter-clone',
  },
  {
    slug: 'kanban_board',
    title: 'Kanban Board',
    brief: 'To-Do application with Drag and Drop.',
    description: '',
    image: Kanban_Image,
    stack: [
      'ReactJS',
      'ReduxJS',
      'ChakraUI',
      'Formik',
      'Yup',
      'React Router Dom',
      'Firebase',
      'TypeScript',
      'Vite',
    ],
    url: 'https://kanbanclone.vercel.app/',
    repository: 'https://github.com/Santipac/KanbanBoard',
  },
];
