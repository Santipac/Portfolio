import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  colors: {
    general: {
      heading: '#15B4C1',
    },
    dark: {
      text: '#f7fafc',
      // ...
      bg: 'rgb(26, 32, 44)',
    },
    light: {
      text: 'whiteAlpha.500',
    },
    black: '#353535',
    white: '#EDF2F7',
  },
});

export default theme;
