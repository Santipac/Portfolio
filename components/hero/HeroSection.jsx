import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  IoIosArrowRoundDown,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';
import { ArrowDownAnimation } from '../../assets/animations';
import { staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../ui/CustomText';

export function HeroSection() {
  const slide = `${ArrowDownAnimation} 1.3s linear infinite`;

  return (
    <Box w="100%" h="95vh" id="home">
      <Box
        w="full"
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <GridItem>
            <TitleText
              title="Santiago Pacini"
              textStyles={{ textAlign: 'center' }}
            />
          </GridItem>
          <GridItem
            textAlign="center"
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <TypingText
              title="Desarrollador Full-Stack"
              fontSize={{ base: '1rem', sm: 'xl', md: '3xl' }}
            />
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
    </Box>
  );
}
