'use client';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useMultiLang } from '~/hooks/multiLanguage';
import { register } from '~/api/modules/authenticate';
import * as yup from 'yup';
import { useFormik } from 'formik';

interface RegisterParams {
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
}
export default function Register() {
  const { t } = useMultiLang();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: {
        first: '',
        last: ''
      }
    },
    validationSchema: yup.object().shape({
      email: yup.string().required(t('email require')).email('Email invalid'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required(t('password require')),
      name: yup.object({
        first: yup.string().min(3, t('First name must be at least 3 characters long')),
        last: yup.string().min(3, t('Last name must be at least 3 characters long'))
      })
    }),
    onSubmit: async (values: RegisterParams) => {
      try {
        const res = await register(values as any);
        console.log(12313, res);
        setMessage('Registered account successfully. Please check mail to active account.');
        setIsError(false);
      } catch (error: any) {
        setMessage(error.response.data.message || error.message);
        setIsError(true);
        console.error('Reset password error:', error.response.data.message || error.message);
      }
    }
  });

  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            {t('sign up')}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('enjoy')}
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel> {t('first name')}</FormLabel>
                    <Input
                      type="text"
                      name="name.first"
                      value={formik.values.name.first}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>{t('last name')}</FormLabel>
                    <Input
                      type="text"
                      name="name.last"
                      value={formik.values.name.last}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>{t('password')}</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword(showPassword => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {message && <Text color={isError ? 'red.500' : 'white'}>{message}</Text>}

              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  {t('sign up')}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  {t('already')} ?
                  <Link href="/login" color={'blue.400'} ml={2}>
                    {t('sign in')}
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
