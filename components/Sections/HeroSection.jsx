import { Box, Button, Grid, GridItem, Heading, Link } from '@chakra-ui/react';
import {
  IoIosArrowRoundDown,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { ArrowDownAnimation } from '../../assets/animations';

export default function HeroSection() {
  const slide = `${ArrowDownAnimation} 1.3s linear infinite`;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        w="100%"
        h="95vh"
        justifyContent="center"
        alignItems="center"
        id="home"
        position="relative"
        top="0"
        left="0"
        zIndex="1"
      >
        <Grid>
          <GridItem>
            <Heading
              as="h1"
              fontWeight="bold"
              fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
              textAlign="center"
              color={'general.heading'}
            >
              Santiago Pacini
            </Heading>
          </GridItem>
          <GridItem textAlign="center">
            <Heading
              as="h3"
              fontWeight="normal"
              fontSize={{ base: '1rem', sm: 'xl', md: '3xl' }}
              _light={{ color: 'blackAlpha.800' }}
            >
              Desarrollador Frontend
            </Heading>
          </GridItem>
          <GridItem>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="6"
              py="4"
            >
              <Link
                href="mailto:santiagopacini@gmail.com"
                target="_blank"
                _hover={{ color: '#de4032', transform: 'translateY(-10px)' }}
              >
                <SiGmail size="30px" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/santiago-pacini-frontend-dev-jr/"
                target="_blank"
                _hover={{ color: '#0071AE', transform: 'translateY(-10px)' }}
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin size="30px" />
              </Link>

              <Link
                href="https://github.com/Santipac"
                target="_blank"
                _hover={{
                  transform: 'translateY(-10px)',
                }}
              >
                <IoLogoGithub size="30px" />
              </Link>
            </Box>
          </GridItem>
        </Grid>
        <Heading
          position="absolute"
          bottom="0"
          right="0"
          m="4"
          zindex="-1"
          animation={slide}
        >
          <Button h="3rem" w="3rem" _light={{ bg: 'gray.200' }}>
            <Link href="#footer">
              <IoIosArrowRoundDown size="50px" />
            </Link>
          </Button>
        </Heading>
      </Box>
    </>
  );
}
