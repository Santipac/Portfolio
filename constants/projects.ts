import { IProject } from '@/interfaces/projects';
import CS_Image from '../public/images/Store_Image.png';
import Twitter_Image from '../public/images/Twitter_Image.png';
import Kanban_Image from '../public/images/Kanban_Image.png';
import Tesla_Image from '../public/images/Tesla_Image.png';

interface ProjectsContent {
  en: IProject[];
  es: IProject[];
}

export const projects: ProjectsContent = {
  en: [
    {
      slug: 'cs_store',
      title: 'CS Store',
      brief:
        'The project is based on the sale of CSGO items. I opted to use the T3 Stack focusing on simplicity, modularity and type-safe development.',
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
      url: 'https://csgostore.vercel.app/',
      repository: 'https://github.com/Santipac/CS-Store',
    },
    {
      slug: 'twitter_clone',
      title: 'Twitter UI',
      brief:
        'Twitter UI Clone with minimal functionalities such as follow users, create tweets and more.',
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
    {
      slug: 'tesla',
      title: 'Tesla Landing',
      brief: 'A Tesla UI clone with Astro JS',
      image: Tesla_Image,
      description:
        'I did this project to refresh my knowledge in basic web development with HTML CSS and Javascript but with productivity enhancing technologies such as Tailwind for styles and Astro for the rest.',
      stack: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'Astro JS'],
      url: 'https://tesla-landing-ui.netlify.app/',
      repository: 'https://github.com/Santipac/tesla-landing',
    },
  ],
  es: [
    {
      slug: 'cs_store',
      title: 'CSGO Store',
      brief:
        'Proyecto basado en la venta de items de CSGO. Opté por utilizar el T3 Stack concentrandome en la simplicidad, modularidad y tipado.',
      image: CS_Image,
      description:
        'La idea de desarrollar esta tienda fue impulsada para aprender sobre varias tecnologias que no conocia hasta el momento de realizar la aplicacion. ',
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
      url: 'https://csgostore.vercel.app/',
      repository: 'https://github.com/Santipac/CS-Store',
    },
    {
      slug: 'twitter_clone',
      title: 'Twitter UI',
      brief:
        'Clon de Twitter con funcionalidades minimas como seguir usuarios, crear tweets y más.',
      image: Twitter_Image,
      description:
        'Hice este proyecto para aprender más sobre tecnologías como Radix UI, tRPC, react-query, y otras. Me gustó la idea de hacer un clon de Twitter porque podía entender cómo funcionan estas tecnologías haciendo funcionalidades mínimas.',
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
      brief: 'Aplicación tipo To-Do List con Drag and Drop',
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
    {
      slug: 'tesla',
      title: 'Tesla Landing',
      brief: 'Landing Page de Tesla hecha con Astro JS',
      image: Tesla_Image,
      description:
        'Realicé este proyecto para refrescar mi conocimiento en el desarrollo web básico con HTML CSS y Javascript pero con tecnologías que aumentan la productividad desarrollando como Tailwind para los estilos y Astro para el resto.',
      stack: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'Astro JS'],
      url: 'https://tesla-landing-ui.netlify.app/',
      repository: 'https://github.com/Santipac/tesla-landing',
    },
  ],
};
