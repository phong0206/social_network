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
  Grid,
  GridItem,
  ChakraProvider,
  Stack,
  Flex,
  Button
} from '@chakra-ui/react';
import React from 'react'; // Make sure to import React
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri';
import CommentsList from '~/components/Coments';
import { useMultiLang } from '~/hooks/multiLanguage';

interface BlogTagsProps {
  tags: string[];
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags = ({ tags, marginTop = 0 }: BlogTagsProps) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag, index) => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={index}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = ({ date, name }: BlogAuthorProps) => {
  return (
    <HStack style={{ marginLeft: '10px' }} spacing="2" display="flex" alignItems="center">
      <Image
        cursor="pointer"
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="bold">{name}</Text>
      <Text>~</Text>
      <Text fontWeight="bold">{date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [followed, setFollowed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const { t } = useMultiLang();

  return (
    <Container maxW="7xl" p="12">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" >
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </GridItem>
        <GridItem colStart={6} colEnd={8} h="10" >
          <Stack direction="row" spacing={4} mt={2}>
            <Flex cursor="pointer">
              {liked ? (
                <BsHeartFill fill="red" fontSize={'35px'} onClick={() => setLiked(!liked)} />
              ) : (
                <BsHeart fontSize={'35px'} onClick={() => setLiked(!liked)} />
              )}
            </Flex>
            <Flex cursor="pointer" onClick={() => setFollowed(!followed)}>
              {followed ? (
                <Button
                  leftIcon={<RiUserFollowFill size="16px" />}
                  colorScheme="pink"
                  variant="solid"
                  style={{ marginBottom: '10px' }}
                  size="sm"
                >
                  {t('follow')}
                </Button>
              ) : (
                <Button
                  size="sm"
                  leftIcon={<RiUserUnfollowFill size="16px" />}
                  colorScheme="blue"
                  variant="outline"
                  style={{ marginBottom: '10px' }}
                >
                  {t('unfollow')}
                </Button>
              )}
            </Flex>
          </Stack>
        </GridItem>
      </Grid>

      <Wrap spacing="30px">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
          </Box>
        </WrapItem>
      </Wrap>
      <Heading as="h2" textAlign="center" marginTop="5" paddingBottom="15px">
        What we write about
      </Heading>
      <Box display="flex" justifyContent="center" marginBottom="30px">
        <Box borderRadius="lg" overflow="hidden">
          <Image
            transform="scale(1.0)"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="A serene beach"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)'
            }}
          />
        </Box>
      </Box>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: '70% 30%'
        }}
        marginInline="auto"
      >
        <Box>
          <VStack spacing="2" paddingRight="20px" maxWidth="800px">
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. ...
            </Text>
          </VStack>
        </Box>
        <Box mt="40px">
          <CommentsList />
        </Box>
      </Grid>
    </Container>
  );
};

export default ArticleList;
