import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { GoTriangleRight } from 'react-icons/go';

export const TabsExperience = () => {
  return (
    <Tabs orientation="horizontal" mt={10}>
      <TabList>
        <Tab
          _selected={{
            color: 'general.heading',
            borderColor: 'general.heading',
          }}
        >
          Distrisuper
        </Tab>
        <Tab
          _selected={{
            color: 'general.heading',
            borderColor: 'general.heading',
          }}
        >
          Alkemy
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <Flex flexDirection="column">
            <Flex gap="2" flexDirection={{ base: 'column', md: 'row' }}>
              <Heading
                as="h2"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="normal"
              >
                Desarrollador Frontend Jr
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'lg', md: '2xl' }}
                color="general.heading"
              >
                @Distrisuper
              </Heading>
            </Flex>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Agosto 2022 - Presente
            </Text>
            <List
              spacing={3}
              pl={{ base: 0, md: '4' }}
              pt={4}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Desarrollo de Paneles Administrativos.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Desarrollo de tablas completas (UI, Paginación, filtros). Para
                consultar / filtrar datos del cliente.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Enrutamiento (protección de rutas).
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Manejo de Estado y Autenticación de Usuarios.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Consumo de APIs con Axios y Hooks.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Manipulación y validaciones de formularios.
              </ListItem>
            </List>
          </Flex>
        </TabPanel>
        <TabPanel px={0}>
          <Flex flexDirection="column">
            <Flex gap="2" flexDirection={{ base: 'column', md: 'row' }}>
              <Heading
                as="h2"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="normal"
              >
                React Developer
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'lg', md: '2xl' }}
                color="general.heading"
              >
                @Alkemy
              </Heading>
            </Flex>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              Octubre 2022 - Noviembre 2022
            </Text>
            <List
              spacing={3}
              pl={{ base: 0, md: '4' }}
              pt={4}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Desarrollo de Homebanking para Alkybank.{' '}
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Desarrollo de UI desde cero.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Enrutamiento (protección de rutas).{' '}
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Manejo de Estado y Autenticación de Usuarios.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Consumo de APIs para realizar transacciones.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
                Carga, Retiro y Transferencia de dinero entre distintas cuentas.{' '}
              </ListItem>
              <ListItem>
                <ListIcon
                  as={GoTriangleRight}
                  color="general.heading"
                  size="md"
                />
Interacción con otros usuarios registrados.              </ListItem>
            </List>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
