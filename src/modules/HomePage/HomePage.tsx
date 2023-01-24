// eslint-disable-next-line no-use-before-define
import React from 'react';
import { PostsPage } from '../../components/PostsPage';
import { Container } from '@mui/material';

export const HomePage: React.FC = () => {
  return (
    <Container sx={{
      p: {
        xl: '50px 0 63px 0',
        lg: '50px 0 63px 0',
        md: '50px 75px 63px 75px',
        sm: '50px 75px 63px 75px',
        xs: '50px 10px 63px 10px',
      },
    }}>
      <PostsPage />
    </Container>
  );
};
