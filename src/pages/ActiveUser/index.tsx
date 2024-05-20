'use client';

import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { activeUser } from '~/api/modules/authenticate';
export default function ActiveUser() {
  const navigate = useNavigate();
  const [res, setRes] = useState<string[]>([]);

  useEffect(() => {
    const verifyToken = async () => {
      const token = new URLSearchParams(location.search).get('token');
      if (token) {
        const response = await activeUser(token);
        console.log(1231231, response.data);
        if (response.status == 200) {
          setRes([
            'Active Account Successful',
            'Back to Login to enjoy all of our cool features.',
            'Active Successfully'
          ]);
        } else {
          setRes(['Active Account Fail', 'Back to Login to send request active account again.', 'Active Fail']);
        }
      }
    };
    verifyToken();
  }, []);

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        {res[3]}
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        {res[0]}
      </Text>
      <Text color={'gray.500'} mb={6}>
        {res[1]}
      </Text>

      <Button
        onClick={handleBackToLogin}
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        Go to Login
      </Button>
    </Box>
  );
}
