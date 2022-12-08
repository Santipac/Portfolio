import { Box, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import projectsInfo from '../../constants/projectsInfo';
import { staggerContainer } from '../../utils/motion';
import { TitleText } from '../ui';
import { CardProject } from './CardProject';

export function ProjectSection() {
  return (
    <Box
      as={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      w="100%"
      minH="100vh"
      p="5"
      display="flex"
      flexDirection="column"
      id="projects"
      alignItems="center"
    >
      <TitleText title="Proyectos" textStyles={{ textAlign: 'center' }} />
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
