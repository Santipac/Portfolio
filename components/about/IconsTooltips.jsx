import { Box, Tooltip } from '@chakra-ui/react';
import {
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiFirebase,
  SiPostman,
  SiGit,
  SiRedux,
  SiVisualstudiocode,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from 'react-icons/si';

//TODO : hacerlo accesible para mobile

export default function IconsTooltips() {
  return (
    <Box display="flex" gap="6" flexWrap="wrap">
      <Tooltip
        label="HTML"
        aria-label="A tooltip"
        bgColor="#E55B1E"
        color="white"
      >
        <span>
          <SiHtml5 size="30px" color="#E55B1E" />
        </span>
      </Tooltip>
      <Tooltip
        label="CSS"
        aria-label="A tooltip"
        bgColor="#3091F2"
        color="white"
      >
        <span>
          <SiCss3 size="30px" color="#3091F2" />
        </span>
      </Tooltip>
      <Tooltip
        label="JavaScript"
        aria-label="A tooltip"
        bgColor="#E1CB1C"
        color="blackAlpha.700"
      >
        <span>
          <SiJavascript size="30px" color="#E1CB1C" />
        </span>
      </Tooltip>
      <Tooltip
        label="ReactJS"
        aria-label="A tooltip"
        bgColor="#5CCFEE"
        color="blackAlpha.700"
      >
        <span>
          <SiReact size="30px" color="#5CCFEE" />
        </span>
      </Tooltip>
      <Tooltip
        label="Redux"
        aria-label="A tooltip"
        bgColor="#7046B2"
        color="white"
      >
        <span>
          <SiRedux size="30px" color="#7046B2" />
        </span>
      </Tooltip>
      <Tooltip
        label="TypeScript"
        aria-label="A tooltip"
        bgColor="#2F72BC"
        color="white"
      >
        <span>
          <SiTypescript size="30px" color="#2F72BC" />
        </span>
      </Tooltip>
      <Tooltip
        label="NodeJS"
        aria-label="A tooltip"
        bgColor="#4E963F"
        color="white"
      >
        <span>
          <SiNodedotjs size="30px" color="#4E963F" />
        </span>
      </Tooltip>
      <Tooltip
        label="MongoDB"
        aria-label="A tooltip"
        bgColor="#3B8F36"
        color="white"
      >
        <span>
          <SiMongodb size="30px" color="#3B8F36" />
        </span>
      </Tooltip>
      <Tooltip
        label="Firebase"
        aria-label="A tooltip"
        bgColor="#F29F13"
        color="white"
      >
        <span>
          <SiFirebase size="30px" color="#F29F13" />
        </span>
      </Tooltip>
      <Tooltip
        label="PostgreSQL"
        aria-label="A tooltip"
        bgColor="#2F5B8B"
        color="white"
      >
        <span>
          <SiPostgresql size="30px" color="#2F5B8B" />
        </span>
      </Tooltip>
      <Tooltip
        label="Prisma"
        aria-label="A tooltip"
        _light={{ color: 'white' }}
        _dark={{ bgColor: 'white', color: 'black' }}
      >
        <span>
          <SiPrisma size="30px" />
        </span>
      </Tooltip>

      <Tooltip label="NextJS" aria-label="A tooltip">
        <span>
          <SiNextdotjs size="30px" color="#FFFFF" />
        </span>
      </Tooltip>

      <Tooltip
        label="Postman"
        aria-label="A tooltip"
        bgColor="#F26734"
        color="white"
      >
        <span>
          <SiPostman size="30px" color="#F26734" />
        </span>
      </Tooltip>

      <Tooltip
        label="Git"
        aria-label="A tooltip"
        bgColor="#E44C30"
        color="white"
      >
        <span>
          <SiGit size="30px" color="#E44C30" />
        </span>
      </Tooltip>
      <Tooltip
        label="VSCode"
        aria-label="A tooltip"
        bgColor="blue.500"
        color="white"
      >
        <span>
          <SiVisualstudiocode size="30px" color="#0173C1" />
        </span>
      </Tooltip>
    </Box>
  );
}
