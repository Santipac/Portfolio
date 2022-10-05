import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { navigation } from './DeskMenu';

export default function MobileMenu() {
  return (
    <Menu>
      <MenuButton>
        <HiMenuAlt2 size="25px" />
      </MenuButton>
      <MenuList
        bg="blackAlpha.300"
        border="none"
        mr="4"
        mt="1"
        _focus={{ bg: 'transparent' }}
        _light={{ bg: 'dark.bg', color: 'dark.text' }}
        _dark={{ bg: '#FFF', color: 'blackAlpha.800' }}
      >
        {navigation.map(el => (
          <MenuItem
            key={el.id}
            _hover={{ bg: 'none' }}
            _light={{ bg: 'none' }}
            display="flex"
            justifyContent="center"
            fontWeight="semibold"
          >
            <a href={el.link}>{el.text}</a>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
