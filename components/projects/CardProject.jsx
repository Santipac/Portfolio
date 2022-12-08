import React from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export const CardProject = ({ text, title, img, stack, repo, deploy, id }) => {
  return (
    <Card
      maxW="lg"
      as={motion.div}
      variants={fadeIn('up', 'spring', id * 0.9, 3)}
    >
      <CardBody paddingX={3}>
        <Image src={img} alt={title} style={{ borderRadius: '0.5rem' }} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text
            paddingX={1}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="normal"
          >
            {text}
          </Text>
          <Box display="flex" flexWrap="wrap">
            {stack.map((el, i) => (
              <Box
                key={i}
                as={motion.div}
                variants={fadeIn('right', 'spring', i * 0.4, 0.75)}
              >
                <Text
                  m="1"
                  _light={{ bg: 'blackAlpha.50' }}
                  _dark={{ bg: 'whiteAlpha.300' }}
                  fontSize={{ base: '0.8rem', md: 'md' }}
                  textAlign="center"
                  p={{ base: '0.3rem' }}
                  borderRadius="md"
                >
                  {el}
                </Text>
              </Box>
            ))}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          width="100%"
          spacing="2"
          display="flex"
          justifyContent="end"
        >
          <Link href={repo} target="_blank" textDecoration="none !important">
            <Button
              _hover={{
                transform: 'translateY(-10px)',
                bg: 'general.heading',
                color: 'white',
              }}
              fontWeight="bold"
              fontSize={{ base: '0.8rem', md: 'lg' }}
              p={{ base: '0.5rem', md: '1rem' }}
              variant="ghost"
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
                color: 'white',
              }}
              fontSize={{ base: '0.8rem', md: 'lg' }}
              p={{ base: '0.5rem', md: '1rem' }}
            >
              Demo
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
