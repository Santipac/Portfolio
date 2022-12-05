import { Box, Heading, Text, Tooltip } from '@chakra-ui/react';
import IconsTooltips from '../IconsTooltips';

export function AboutSection() {
  return (
    <Box
      w="100%"
      minHeight="70vh"
      p="5"
      id="about"
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
        p="2"
      >
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
          textAlign="center"
          color={'general.heading'}
        >
          Sobre Mi
        </Heading>

        <Text
          fontSize={{ base: '0.8rem', sm: 'sm', md: 'lg' }}
          mt="10"
          lineHeight="1.8"
        >
          Hola! Soy Santiago, un Desarrollador Full-Stack. Soy una persona perseverante, disciplinada, autodidacta y curiosa. Mi objetivo está en seguir aprendiendo para ser un mejor desarrollador y lograr grandes cosas. Soy una persona que disfruta del aprendizaje, que le gustan los desafíos. Tengo la dedicación, motivación y la pasión para crecer como profesional y para disfrutar del proceso.
        </Text>
        <Text
          fontSize={{ base: '0.8rem', sm: 'sm', md: 'lg' }}
          my="4"
          lineHeight="1.8"
        >
          Soy una persona que disfruta del aprendizaje, que le gustan los
          desafíos. Tengo la dedicación, motivación y la pasión para crecer como
          profesional y para disfrutar de largas horas de codeo.
        </Text>

        <Text
          fontSize={{ base: '0.8rem', sm: 'sm', md: 'lg' }}
          lineHeight="1.8"
          mb="2"
        >
          Algunas tecnologías que utilizo:
        </Text>
        <IconsTooltips />
      </Box>
    </Box>
  );
}
