import { IProject } from '@/interfaces/projects';
import CS_Image from '../public/images/Store_Image.png';
import NutriAnalyzer_Image from '../public/images/nutrianalyzer_Image.png';
import Twitter_Image from '../public/images/Twitter_Image.png';
import Kanban_Image from '../public/images/Kanban_Image.png';
import Tesla_Image from '../public/images/Tesla_Image.png';
import Dolarizapp_Image from '../public/images/Dolarizapp_Image.png';
import Dolarizapp_Mobile from '../public/images/Dolarizapp_mobile.png';
import CloutyShop_Image from '../public/images/clouty_Image.png';
import Honomailer_Image from '../public/images/honomailer_Image.png';

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
      slug: 'nutrianalyzer',
      title: 'NutriAnalyzer',
      brief:
        'An intelligent web application that analyzes food and provides detailed nutritional information using AI.',
      image: NutriAnalyzer_Image,
      description:
        'Designed for health-conscious users who want to better understand what they eat and receive personalized advice. The app features complete nutritional analysis including macronutrients, micronutrients, calorie counting, and health scoring. It includes a smart nutritional chat with a virtual nutritionist that provides personalized recommendations based on user profiles and fitness goals.',
      stack: [
        'NextJS 15',
        'React 19',
        'TypeScript',
        'TailwindCSS',
        'Radix UI',
        'Zustand',
        'Vercel AI SDK',
        'OpenAI GPT-3.5',
        'Lucide React',
        'PostCSS',
        'Edge Runtime',
      ],
      url: 'https://food-health-analyzer-prod.vercel.app/',
      repository: 'https://github.com/Santipac/food-ai-analyzer',
    },
    {
      slug: 'dolarizapp-mobile',
      title: 'Dolarizapp',
      brief:
        'A mobile application where you can consult, convert and save your conversions.',
      image: Dolarizapp_Mobile,
      description:
        "An app where you will find the most important quotes that thousands of people use every day. You can also convert your dollars or pesos and see the value with the different quotes. And finally, a history where you can save the quotes you don't want to lose. Not yet available in stores (coming soon). ",
      stack: [
        'React Native',
        'Typescript',
        'Zustand',
        'React Query',
        'Expo SDK',
        'Figma',
      ],
      repository: 'https://github.com/Santipac/dolarizapp',
    },
    {
      slug: 'dolarizapp-web',
      title: 'Dolarizapp (web)',
      brief: 'A Webapp to convert ARS to USD',
      image: Dolarizapp_Image,
      description:
        'A webapp where you will find different quotes with information about them. Designed only for Argentines, those who suffer every day by the devaluation of our currency. You can insert the amount you want, seeing its value in dollars with the different quotes. Some quotes have additional information about them.',
      stack: [
        'React js',
        'Typescript',
        'TailwindCSS',
        'Framer Motion',
        'React Query',
        'Storybook',
        'Vite js',
        'pnpm',
        'React Router Dom',
        'Figma',
      ],
      url: 'https://dolarizapp.vercel.app/',
      repository: 'https://github.com/Santipac/dolarizapp-web',
    },
    {
      slug: 'honomailer',
      title: 'Honomailer',
      brief: 'A simple serverless backend using Hono.js.',
      image: Honomailer_Image,
      description:
        'The main idea of this project was to send emails from a contact form without having to expose private access keys on the client side and to avoid creating a backend that needs a lot of configuration to be able to use it, it should be quick to implement and simple to deploy.',
      stack: ['Hono.js', 'Brevo', 'Vercel'],
      repository: 'https://github.com/Santipac/honomailer',
    },
    {
      slug: 'clouty-shop',
      title: 'Clouty Shop',
      brief: 'Clothing e-commerce using modern technologies.',
      image: CloutyShop_Image,
      description:
        'The main idea of this project was to learn the basics of Next.JS complemented with other technologies and tools. It has a database to store products. Fully functional API using Next and MongoDB. Docker was used to use MongoDB locally without creating a production-ready database, and finally, Material UI was used for its simplicity in styling. These are some of the most important technologies I used.',
      stack: [
        'NextJS',
        'Material UI',
        'Docker',
        'Mongoose',
        'MongoDB',
        'Paypal SDK',
        'Next Auth',
        'Node JS',
        'API Context',
        'JsonWebToken',
        'SWR',
      ],
      repository: 'https://github.com/Santipac/Clouty-Ecommerce',
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
      repository: 'https://github.com/Santipac/twitter-clone',
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
      slug: 'nutrianalyzer',
      title: 'NutriAnalyzer',
      brief:
        'Una aplicación web inteligente que analiza alimentos y proporciona información nutricional detallada usando IA.',
      image: NutriAnalyzer_Image,
      description:
        'Diseñada para usuarios conscientes de su salud que quieren entender mejor lo que comen y recibir consejos personalizados. La app incluye análisis nutricional completo con macronutrientes, micronutrientes, conteo de calorías y puntuación de salud. Cuenta con un chat nutricional inteligente con un nutricionista virtual que proporciona recomendaciones personalizadas basadas en el perfil del usuario y objetivos de fitness.',
      stack: [
        'NextJS 15',
        'React 19',
        'TypeScript',
        'TailwindCSS',
        'Radix UI',
        'Zustand',
        'Vercel AI SDK',
        'OpenAI GPT-3.5',
        'Lucide React',
        'PostCSS',
        'Edge Runtime',
      ],
      url: 'https://food-health-analyzer-prod.vercel.app/',
      repository: 'https://github.com/Santipac/food-ai-analyzer',
    },
    {
      slug: 'dolarizapp-mobile',
      title: 'Dolarizapp',
      brief:
        'Una app donde consultar, convertir y guardar distintas cotizaciones.',
      image: Dolarizapp_Mobile,
      description:
        'Una app donde encontrarás las cotizaciones más importantes que miles de personas utilizan día a día. También puedes convertir tus dólares o pesos y ver el valor con las diferentes cotizaciones. Y por último, un historial donde guardar las cotizaciones que no quieres perder. Aún no está disponible en las tiendas (estará pronto).',
      stack: [
        'React Native',
        'Typescript',
        'Zustand',
        'React Query',
        'Expo SDK',
        'Figma',
      ],
      repository: 'https://github.com/Santipac/dolarizapp',
    },
    {
      slug: 'dolarizapp-web',
      title: 'Dolarizapp (web)',
      brief: 'Una webapp donde convertir tus pesos a dólares.',
      image: Dolarizapp_Image,
      description:
        'Una webapp donde encontrarás distintas cotizaciones con información de las mismas Pensada unicamente para los Argentinos, los que sufrimos todos los días por la devaluación de nuestra moneda. Podes insertar el monto que quieras, viendo su valor en dolares con las distintas cotizaciones. Algunas cotizaciones poseen información adicional sobre ellas.',
      stack: [
        'React js',
        'Typescript',
        'TailwindCSS',
        'Framer Motion',
        'React Query',
        'Vite js',
        'pnpm',
        'React Router Dom',
        'Figma',
      ],
      url: 'https://dolarizapp.vercel.app/',
      repository: 'https://github.com/Santipac/dolarizapp-web',
    },
    {
      slug: 'honomailer',
      title: 'Honomailer',
      brief: 'Un simple serverless backend usando Hono.js.',
      image: Honomailer_Image,
      description:
        'La idea principal de este proyecto era lograr enviar emails desde un formulario de contacto sin tener que exponer claves de accesos privadas en el lado del cliente y evitar crear un backend que necesite mucha configuración para poder usarlo debía ser rápido de implementar y simple de desplegar.',
      stack: ['Hono.js', 'Brevo', 'Vercel'],
      repository: 'https://github.com/Santipac/honomailer',
    },
    {
      slug: 'clouty-shop',
      title: 'Clouty Shop',
      brief: 'Ecommerce de ropa utilizando tecnologías modernas.',
      image: CloutyShop_Image,
      description:
        'La idea principal de este proyecto fue aprender las bases de Next.JS complementando con otras tecnologías y herramientas. Posee base de datos para almacenar los productos. API totalmente funcionar utilizando Next y MongoDB. Se utilizó docker para poder usar MongoDB de forma local sin crear una base de datos lista para producción, y por último se utilizo Material UI por la simplicidad para crear estilos. Éstas son algunas de las tecnologías mas importantes que utilicé.',
      stack: [
        'NextJS',
        'Material UI',
        'Docker',
        'Mongoose',
        'MongoDB',
        'Paypal SDK',
        'Next Auth',
        'Node JS',
        'API Context',
        'JsonWebToken',
        'SWR',
      ],
      repository: 'https://github.com/Santipac/Clouty-Ecommerce',
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
      repository: 'https://github.com/Santipac/twitter-clone',
    },
  ],
};
