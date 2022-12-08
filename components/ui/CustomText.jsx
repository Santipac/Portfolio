import { Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title, textStyles, fontSize }) => (
  <Text
    as={motion.p}
    variants={textContainer}
    fontWeight="normal"
    fontSize={fontSize}
    style={textStyles}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </Text>
);

export const TitleText = ({ title, textStyles }) => (
  <Heading
    as={motion.h2}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    mt={4}
    fontWeight="bold"
    color="general.heading"
    fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
    style={textStyles}
  >
    {title}
  </Heading>
);
