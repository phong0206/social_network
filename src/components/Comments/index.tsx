import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
  Stack,
  Text,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';

const Comment = ({ comment }: any) => (
  <Stack direction="row" spacing={4} align="center" mb="10px">
    <Avatar name={comment.author} src={comment.avatar} />
    <Box>
      <Text fontWeight="bold">{comment.author}</Text>
      <Text>{comment.text}</Text>
    </Box>
  </Stack>
);

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'This is a sample comment!', author: 'Jane Doe', avatar: 'https://bit.ly/dan-abramov' },
    { id: 2, text: "Here's another insightful comment.", author: 'John Doe', avatar: 'https://bit.ly/kent-c-dodds' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: any) => {
    setNewComment(e.target.value);
  };

  const submitComment = () => {
    const commentToAdd = {
      id: comments.length + 1,
      text: newComment,
      author: 'New User',
      avatar: 'https://bit.ly/ryan-florence'
    };
    setComments([...comments, commentToAdd]);
    setNewComment('');
  };

  return (
    <VStack spacing={8} align="stretch">
      <Box style={{ maxHeight: '300px', overflowY: 'auto',  }}>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Box>
      <FormControl>
        <FormLabel htmlFor="comment">Add a Comment</FormLabel>
        <Textarea id="comment" value={newComment} onChange={handleCommentChange} placeholder="Write something..." />
        <Button mt={4} colorScheme="blue" onClick={submitComment}>
          Submit
        </Button>
      </FormControl>
    </VStack>
  );
};

export default CommentsList;
