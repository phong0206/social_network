'use client';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import 'react-notifications-component/dist/theme.css';
import { loginRequest } from '~/store/actions/user';
import { useDispatch } from 'react-redux';
import { useMultiLang } from '~/hooks/multiLanguage';

interface LoginParams {
  email: string;
  password: string;
}

export default function SimpleCard() {
  const dispatch = useDispatch();
  const { t } = useMultiLang();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required(t('email require')).email('Email invalid'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required(t('password require'))
    }),
    onSubmit: async (values: LoginParams) => {
      dispatch(loginRequest(values) as any);
    }
  });

  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{t('welcome')}</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {t('enjoy')}
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={6}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <Text color="red.500">
                    {typeof formik.errors.email === 'string'
                      ? formik.errors.email
                      : JSON.stringify(formik.errors.email)}
                  </Text>
                ) : null}
              </FormControl>
              <FormControl id="password">
                <FormLabel>{t('password')}</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Text color="red.500">
                    {typeof formik.errors.password === 'string'
                      ? formik.errors.password
                      : JSON.stringify(formik.errors.password)}
                  </Text>
                ) : null}
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>{t('remember me')}</Checkbox>
                  <Link href="/forgot-password" color={'blue.400'}>
                    {t('forgot pass')}?
                  </Link>
                  <Link href="/register" color={'blue.400'}>
                    {t('sign up')}
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  {t('sign in')}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
