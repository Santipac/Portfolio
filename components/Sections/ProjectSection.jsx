import { Box, Grid, Heading } from '@chakra-ui/react';
import projectsInfo from '../../helpers/projectsInfo';
import { CardProject } from '../CardProject';

export default function ProjectSection() {
  return (
    <Box
      w="100%"
      minH="100vh"
      p="5"
      display="flex"
      flexDirection="column"
      id="projects"
      alignItems="center"
    >
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
        color={'general.heading'}
      >
        Proyectos
      </Heading>
      <Grid
        w={{ base: '95%', md: '70%' }}
        templateColumns={{ lg: 'repeat(2, 1fr)' }}
        templateRows={{ base: 'repeat(auto, 1fr)', lg: 'none' }}
        gap="4"
        mt="16"
      >
        {projectsInfo.map(el => (
          <CardProject
            img={el.img}
            title={el.title}
            text={el.text}
            stack={el.stack}
            repo={el.repo}
            deploy={el.deploy}
            key={el.id}
          />
        ))}
      </Grid>
    </Box>
  );
}
