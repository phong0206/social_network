'use client';

import { Button, FormControl, Flex, Heading, Input, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { useMultiLang } from '~/hooks/multiLanguage';

export default function ForgotPasswordForm() {
  const { t } = useMultiLang();

  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
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
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          {t('forgot your pass')}?
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
          {t('getlink')}
        </Text>
        <FormControl id="email">
          <Input placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} type="email" />
        </FormControl>
        <Stack spacing={6}>
          <Stack direction={{ base: 'column', sm: 'row' }} align={'end'} justify={'end'}>
            <Link href="/login" color={'blue.400'}>
              {t('back login')}
            </Link>
          </Stack>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
          >
            {t('send request')}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
