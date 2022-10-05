import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function Project({ text, title, img, stack, repo, deploy, id }) {
  return (
    <>
      <Box
        maxWidth="100%"
        minH="20rem"
        borderRadius="md"
        p="2"
        shadow="xl"
        bg="whiteAlpha.200"
      >
        <Image src={img} alt={title} />
        <Heading
          as="h3"
          fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
          px="2"
          mt="4"
        >
          {title}
        </Heading>
        <Heading
          as="h6"
          fontWeight="medium"
          fontSize={{ base: '0.8rem', sm: 'md', md: 'lg' }}
          px="2"
          my="2"
        >
          {text}
        </Heading>
        <Box display="flex" flexWrap={'wrap'}>
          {stack.map((el, i) => (
            <Text
              key={i}
              m="1"
              _light={{ bg: 'blackAlpha.50' }}
              _dark={{ bg: 'whiteAlpha.300' }}
              fontSize={{ base: '0.8rem', md: 'lg' }}
              textAlign="center"
              p={{ base: '0.5rem' }}
              borderRadius="md"
            >
              {el}
            </Text>
          ))}
        </Box>
        <ButtonGroup mt="4" p="2" justifyContent="end" display="flex">
          <Link href={repo} target="_blank" textDecoration="none !important">
            <Button
              _light={{
                bg: 'blackAlpha.200',
                _hover: {
                  transform: 'translateY(-10px)',
                  bg: 'general.heading',
                  color: 'white',
                },
              }}
              _hover={{
                transform: 'translateY(-10px)',
                bg: 'general.heading',
                colo: 'white',
              }}
              fontWeight="bold"
              fontSize={{ base: '0.8rem', md: 'lg' }}
              p={{ base: '0.5rem', md: '1rem' }}
            >
              Código
            </Button>
          </Link>

          <Link
            href={deploy}
            target="_blank"
            textDecoration={'none !important'}
          >
            <Button
              _light={{
                bg: 'blackAlpha.200',
                _hover: {
                  transform: 'translateY(-10px)',
                  bg: 'general.heading',
                  color: 'white',
                },
              }}
              _hover={{
                transform: 'translateY(-10px)',
                bg: 'general.heading',
                colo: 'white',
              }}
              fontSize={{ base: '0.8rem', md: 'lg' }}
              p={{ base: '0.5rem', md: '1rem' }}
            >
              Demo
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </>
  );
}
