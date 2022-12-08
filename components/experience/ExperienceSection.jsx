import { Box } from '@chakra-ui/react';
import { TitleText } from '../ui';
import { TabsExperience } from './TabsExperience';

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
        <TitleText title="Experiencia" textStyles={{ textAlign: 'center' }} />
        <Box>
          <TabsExperience />
        </Box>
      </Box>
    </Box>
  );
}
