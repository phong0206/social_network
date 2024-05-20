'use client';

import { Button, FormControl, Flex, Heading, Input, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { useMultiLang } from '~/hooks/multiLanguage';
import { sendRequestResetPassword } from '~/api/modules/authenticate';
import * as React from 'react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);

  const { t } = useMultiLang();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await sendRequestResetPassword(email);
      console.log(2342,res)
      setMessage('An email has been sent to reset your password.');
      setIsError(false);
    } catch (error: any) {
      setMessage(error.response.data.message || error.message);
      setIsError(true);
      console.error('Reset password error:', error.response.data.message || error.message);
    }
  };

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
        <form onSubmit={handleResetPassword}>
          <FormControl id="email">
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
            <Button
              mt={4}
              type="submit"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500'
              }}
            >
              {t('send request')}
            </Button>
          </FormControl>
        </form>
        {message && <Text color={isError ? 'red.500' : 'white'}>{message}</Text>}
        <Stack spacing={6}>
          <Stack direction={{ base: 'column', sm: 'row' }} align={'end'} justify={'end'}>
            <Link href="/login" color={'blue.400'}>
              {t('back login')}
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}
