import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import LinkRouter from 'next/link';
import React from 'react';

export const navigation = [
  { id: new Date().getTime() * 2, link: '#about', text: 'Sobre' },
  { id: new Date().getTime(), link: '#experience', text: 'Experiencia' },
  { id: new Date().getTime() * 3, link: '#projects', text: 'Proyectos' },
  { id: new Date().getTime() * 4, link: '#contact', text: 'Contacto' },
];

export default function DeskMenu() {
  return (
    <UnorderedList listStyleType="none" display="flex" gap={4}>
      {navigation.map(el => (
        <ListItem key={el.id} fontSize={{ base: '1rem', md: '1.5rem' }}>
          <LinkRouter href={el.link}>
            <Link _hover={{ color: 'general.heading' }}>{el.text}</Link>
          </LinkRouter>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
