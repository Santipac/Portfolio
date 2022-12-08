import LeRestaurant from '../public/images/Projects/LeRestaurant.png';
import CalendarApp from '../public/images/Projects/CalendarApp.png';
import TodoApp from '../public/images/Projects/Todo-App.png';
import WeatherApp from '../public/images/Projects/WeatherApp.png';
import BasementEcommerce from '../public/images/Projects/Basement-Home.png';

const projectsInfo = [
  {
    id: 1,
    img: BasementEcommerce,
    title: 'Basement Ecommerce',
    text: `Tienda de ropa. El proyecto está basado en un challenge de Basement para aplicar a alguna de sus vacantes. Elegí realizarlo como temática y darle mi toque personal.`,
    stack: [
      'NextJS',
      'Tailwind',
      'Redux Toolkit',
      'Typescript',
      'Firebase',
      'Figma',
    ],
    repo: 'https://github.com/Santipac/Ecommerce-Basement',
    deploy: 'https://ecommerce-basement.vercel.app/',
  },
  {
    id: 2,
    img: CalendarApp,
    title: 'CalendarApp',
    text: `Aplicación MERN de Calendario para equipos, cada Usuario puede modificar o eliminar sus propios Eventos pero solo puede leer los de los demás. `,
    stack: [
      'ReactJS',
      'Tailwind',
      'Node',
      'Typescript',
      'MongoDB',
      'Express',
      'JWT',
    ],
    repo: 'https://github.com/Santipac/CalendarApp',
    deploy: 'https://calendar-app-santipac.vercel.app/',
  },

  {
    id: 3,
    img: TodoApp,
    title: 'Todo App',
    text: `CRUD Aplicacion de tareas con Autenticación. Podes modificar las tareas, marcar como completada o borrarlas. Autenticación y Base de Datos con Firebase.`,
    stack: [
      'ReactJS',
      'ChakraUI',
      'Redux Toolkit',
      'React Router Dom',
      'Firebase',
      'Formik',
    ],
    repo: 'https://github.com/Santipac/Todo-App',
    deploy: 'https://todo-app-santipac.vercel.app/',
  },
  {
    id: 4,
    img: WeatherApp,
    title: 'Weather App',
    text: `Weather app donde se puede consultar el clima en tiempo real, o aproximados del día. Incluye un Modo Oscuro.`,
    stack: ['ReactJS', 'Tailwind', 'Axios'],
    repo: 'https://github.com/Santipac/WeatherApp',
    deploy: 'https://weather-app-santipac.vercel.app/',
  },
];
export default projectsInfo;
