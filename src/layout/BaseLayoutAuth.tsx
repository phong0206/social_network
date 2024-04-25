'use client';

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import ColorModeToggle from '~/components/Button/ColorModeToggle';
import { useMultiLang } from '~/hooks/multiLanguage';

export default function SplitScreen({ children }: { children: ReactNode }) {
  const { t, i18n } = useMultiLang();

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <div style={{ paddingLeft: '5px', paddingTop: '5px' }}>
        <ColorModeToggle />
        <Menu>
          <MenuButton marginLeft={1} as={Button}>
            {t('language')}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => changeLanguage('en')}>en</MenuItem>
            <MenuItem onClick={() => changeLanguage('vi')}>vi</MenuItem>
          </MenuList>
        </Menu>
      </div>
      {children}
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
          display={{ base: 'none', md: 'block' }}
        />
      </Flex>
    </Stack>
  );
}
