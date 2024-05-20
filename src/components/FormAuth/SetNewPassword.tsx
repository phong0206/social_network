'use client';

import { Button, FormControl, Flex, Heading, Input, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { useMultiLang } from '~/hooks/multiLanguage';
import { resetPassword } from '~/api/modules/authenticate';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ResetPasswordProps {
  password: string;
  token: string;
}

export default function SetPassword() {
  const { t } = useMultiLang();
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    console.log('Token from query params:', token);
    if (!token) {
      navigate('/404');
    }
  }, [location, navigate]);

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const token = new URLSearchParams(location.search).get('token');
    if (password !== confirmPassword) {
      setMessage('Mật khẩu không khớp. Vui lòng thử lại.');
      setIsError(true);
      return;
    }
    if (!token) {
      setMessage('No token provided. Cannot reset password.');
      setIsError(true);
      return;
    }
    try {
      const resetData: ResetPasswordProps = { password, token };
      const res = await resetPassword(resetData);
      console.log(12312, res);
      setMessage(res.data.message);
      setIsError(false);
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.message || error.message}`);
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
          {t('Reset new password')}
        </Heading>
        <form onSubmit={handleResetPassword}>
          <FormControl id="password">
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              mb={4}
            />
            <Input
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
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
              {t('submit')}
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
