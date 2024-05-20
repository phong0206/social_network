'use client';

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Stack,
  Flex
} from '@chakra-ui/react';
import React from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';
import { useMultiLang } from '~/hooks/multiLanguage';
import { BlogTags } from '~/components/Blog/BlogTags';

interface BlogAuthorProps {
  date: Date;
  name: string;
  view: number;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  const { t } = useMultiLang();
  return (
    <HStack style={{ marginLeft: '10px' }} spacing="2" display="flex" alignItems="center">
      <Image
        cursor="pointer"
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="bold">{props.name}</Text>
      <Text>~</Text>
      <Text fontWeight="bold">{props.date.toLocaleDateString()}</Text>
      <Text>~</Text>
      <Text fontStyle="italic">
        {props.view} {t('views')}
      </Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [liked, setLiked] = React.useState(false);
  const [followed, setFollowed] = React.useState(false);
  const { t } = useMultiLang();

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1"> {t('for you')}</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: '100%', sm: '85%' }} zIndex="2" marginLeft={{ base: '0', sm: '5%' }} marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
          <Stack direction="row" spacing={4}>
            <Flex cursor="pointer" onClick={() => setFollowed(!followed)}>
              {followed ? (
                <Button
                  leftIcon={<RiUserFollowFill />}
                  colorScheme="pink"
                  variant="solid"
                  style={{ marginBottom: '10px' }}
                >
                  {t('follow')}
                </Button>
              ) : (
                <Button
                  leftIcon={<RiUserUnfollowFill />}
                  colorScheme="blue"
                  variant="outline"
                  style={{ marginBottom: '10px' }}
                >
                  {t('unfollow')}
                </Button>
              )}
            </Flex>
          </Stack>
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={useColorModeValue('gray.700', 'gray.200')} fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Flex mt={2} cursor="pointer">
            {liked ? (
              <BsHeartFill fill="red" fontSize={'35px'} style={{ marginTop: '5px' }} onClick={() => setLiked(!liked)} />
            ) : (
              <BsHeart fontSize={'35px'} style={{ marginTop: '5px' }} onClick={() => setLiked(!liked)} />
            )}
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} view={1234} />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
