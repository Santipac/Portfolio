import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
} from '@chakra-ui/react';
import '../styles/globals.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />

          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
