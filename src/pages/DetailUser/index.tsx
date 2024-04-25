'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
  InputLeftAddon,
  InputGroup
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import '~/pages/DetailUser/index.css';
import { useMultiLang } from '~/hooks/multiLanguage';

export default function UserProfileEdit() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const { t } = useMultiLang();

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setShowCalendar(true);
  };
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          {t('profile edit')}
        </Heading>
        <FormControl id="userName">
          <FormLabel>{t('avatar')}</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">{t('change avatar')}</Button>
            </Center>
          </Stack>
        </FormControl>
        <Stack direction="row" spacing={4}>
          <FormControl id="firstName">
            <FormLabel>{t('first name')}</FormLabel>
            <Input type="text" placeholder={t('first name')} />
          </FormControl>
          <FormControl id="lastName">
            <FormLabel>{t('last name')}</FormLabel>
            <Input type="text" placeholder={t('last name')} />
          </FormControl>
        </Stack>
        <FormControl id="email">
          <FormLabel>{t('birth date')}</FormLabel>
          <Input
            type="text"
            value={selectedDate.toDateString()}
            onClick={() => setShowCalendar(!showCalendar)}
            readOnly
          />
          {showCalendar && <Calendar value={selectedDate} onChange={handleDateChange} />}
        </FormControl>
        <FormControl id="email">
          <FormLabel>{t('phone number')}</FormLabel>
          <InputGroup>
            <InputLeftAddon>+84</InputLeftAddon>
            <Input _placeholder={{ color: 'gray.500' }} type="tel" placeholder={t('phone number')} />
          </InputGroup>
        </FormControl>
        <FormControl id="password">
          <FormLabel>{t('password')}</FormLabel>
          <Input placeholder={t('password')} _placeholder={{ color: 'gray.500' }} type={t('password')} />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            onClick={() => (window.location.href = '/')}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500'
            }}
          >
            {t('cancel')}
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500'
            }}
          >
            {t('submit')}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
