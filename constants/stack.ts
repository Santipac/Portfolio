
export const languages = [
    { label: 'JavaScript', type: 'language' },
    { label: 'TypeScript', type: 'language' },
];

export const tools = [
    { label: 'Figma', type: 'tools' },
    { label: 'Postman', type: 'tools' },
    { label: 'DataGrip', type: 'tools' },
    { label: 'VSCode', type: 'tools' },
    { label: 'Expo', type: 'tools' },
];

export const backend = [
    { label: 'Node', type: 'backend' },
    { label: 'Express', type: 'backend' },
    { label: 'Nest', type: 'backend' },
    { label: 'tRPC', type: 'backend' },
    { label: 'PrismaORM', type: 'backend' },
    { label: 'AWS', type: 'backend' },
    { label: 'JsonWebToken', type: 'backend' },
    { label: 'Docker', type: 'backend' },
];

export const frontend = [
    { label: 'React', type: 'frontend' },
    { label: 'React Native', type: 'frontend' },
    { label: 'Next', type: 'frontend' },
    { label: 'Astro', type: 'frontend' },
    { label: 'Redux', type: 'frontend' },
    { label: 'Zustand', type: 'frontend' },
    { label: 'React Query', type: 'frontend' },
    { label: 'Material UI', type: 'frontend' },
    { label: 'Chraka UI', type: 'frontend' },
    { label: 'TailwindCSS', type: 'frontend' },
];

export const stack = [...tools, ...frontend, ...backend, ...languages];