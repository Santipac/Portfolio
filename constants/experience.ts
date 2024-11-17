import educabot from '@/public/images/educabot_logo.jpg';
import alkemy from '@/public/images/alkemy_logo.jpg';
import comunyt from '@/public/images/comunyt_logo.jpg';
import aoki from '@/public/images/aoki_logo.jpg';

export const experience = {
  en: [
    {
      company: 'Educabot',
      position: 'Frontend Developer',
      time: 'Jul 2023 - Present',
      description:
        'Participation in different parts of the application suite for web and mobile platforms.',
      task: [
        'Creation and implementation of new features',
        'Report and fix bugs',
        'Review code from other devs.',
      ],
      link: 'https://educabot.com/',
      logo: educabot,
    },
    {
      company: 'Aoki Technology',
      position: 'Frontend Developer',
      time: 'Aug 2022 - Mar 2023',
      description:
        'Creation of Admin Dashboards for the automation of customer tasks.',
      task: [
        ' Creation of tables with filters to speed up the queries of remittances and invoices from the backend.',
        'Route management for correct navigation between views',
        ' Context API to manage the global state in a simple way and without dependencies.',
      ],
      link: 'https://aokitech.com.ar/',
      logo: aoki,
    },
    {
      company: 'Alkemy',
      position: 'React Developer',
      time: 'Oct 2022 - Nov 2022',
      description:
        'Homebanking for Alkybank, a group project carried out to enhance the skills of the participants of the internship.',
      task: [
        'Homebaking developed using React and MaterialUI which contributed in an effective and attractive interface.',
        'Redux architecture for clean and scalable global state management.',
        'Testing of components with Jest.',
        'User Authentication with JsonWebToken',
      ],
      link: null,
      logo: alkemy,
    },
  ],
  es: [
    {
      company: 'Educabot',
      position: 'Desarrollador Frontend',
      time: 'Jul 2023 - Presente',
      description:
        'Participación en distintas partes de la suite de aplicaciones para las plataformas web y mobile.',
      task: [
        'Creación e implementación de nuevas features utlizando buenas prácticas',
        'Reportar y corregir bugs',
        ' Revisar código de otros devs',
      ],
      link: 'https://educabot.com/',
      logo: educabot,
    },
    {
      company: 'Aoki Tecnología',
      position: 'Desarrollador Frontend',
      time: 'Ago 2022 - Jun 2023',
      description:
        'Creación de paneles administrativos para la automatización de las tareas de los clientes.',
      task: [
        'Creación de tablas con filtros para agilizar las consultas de remitos y facturas desde el backend.',
        'Manejo de rutas para una correcta navegación entre vistas',
        'Context API para gestionar el estado global de forma sencilla y sin dependencias.',
      ],
      link: 'https://aokitech.com.ar/',
      logo: aoki,
    },
    {
      company: 'Alkemy',
      position: 'React Developer',
      time: 'Oct 2022 - Nov 2022',
      description:
        'Homebanking para Alkybank, un proyecto de grupo realizado para mejorar las competencias de los participantes en las prácticas.',
      task: [
        'Homebaking desarrollado utilizando React y MaterialUI que contribuyeron en una interfaz eficaz y atractiva.',
        'Arquitectura Redux para una gestión de estados global, limpia y escalable.',
        'Testing de componentes con Jest.',
        'Autenticación de usuarios con JsonWebToken',
      ],
      link: null,
      logo: alkemy,
    },
  ],
};
