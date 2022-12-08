import { Box, Button, Heading, Link } from '@chakra-ui/react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { ArrowDownAnimation } from '../../assets/animations';

export function FooterSection() {
  const slide = `${ArrowDownAnimation} 1.3s linear infinite`;
  return (
    <>
      <Box
        minHeight="15vh"
        borderTop="2px solid"
        borderColor={'gray.200'}
        id="footer"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bottom="0"
        mt="16"
      >
        <Heading
          as="h4"
          fontWeight="normal"
          fontSize={{ base: '0.9rem', sm: 'lg' }}
        >
          Santiago Pacini | Portfolio
        </Heading>
        <Heading position="absolute" bottom="0" right="0" m="4" zindex="-1">
          <Button
            h="3rem"
            w="3rem"
            animation={slide}
            _light={{ bg: 'gray.200' }}
          >
            <Link href="#home">
              <IoIosArrowRoundUp size="50px" />
            </Link>
          </Button>
        </Heading>
      </Box>
    </>
  );
}
