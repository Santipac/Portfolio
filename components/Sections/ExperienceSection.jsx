import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { TabsExperience } from '../TabsExperience';

export function ExperienceSection() {
  return (
    <Box
      w="100%"
      minHeight="70vh"
      p="5"
      id="experience"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        my="20"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        w={{ base: '90%', lg: '60%' }}
      >
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
          textAlign="center"
          color={'general.heading'}
        >
          Experiencia
        </Heading>
        <Box>
          <TabsExperience />
        </Box>
      </Box>
    </Box>
  );
}
