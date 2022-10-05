import { Box, Heading, useColorMode } from '@chakra-ui/react';

import { SunIcon } from '@chakra-ui/icons';

import DeskMenu from './DeskMenu';

import { RotateAnimation } from '../assets/animations';

const rotation = `${RotateAnimation} 10s linear infinite`;

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        w="100%"
        minHeight={'min-content'}
        display="flex"
        justifyContent={{ base: 'space-between', sm: 'space-around' }}
        alignItems="center"
        py="6"
        px="4"
        position="fixed"
        top="0"
        zIndex="2"
        backdropFilter="auto"
        backdropBlur="5px"
      >
        <Heading as={'h2'} fontWeight="bold">
          <a href="#home">SP</a>
        </Heading>

        <Box display="flex" alignItems="center">
          {/*NAV DESKTOP*/}
          <Box display={{ base: 'none', md: 'flex' }}>
            <DeskMenu />
          </Box>

          <SunIcon
            animation={rotation}
            _light={{ color: 'black' }}
            cursor="pointer"
            color="white"
            fontSize="20px"
            mb={{ base: '2', sm: '1' }}
            ml="2"
            onClick={() => toggleColorMode()}
          />
        </Box>
      </Box>
    </>
  );
}
