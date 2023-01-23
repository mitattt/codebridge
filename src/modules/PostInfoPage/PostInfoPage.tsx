/* eslint-disable no-use-before-define */
import React from 'react';
import { useParams } from 'react-router-dom';

import { PostInfo } from '../../components/PostInfo/PostInfo';

export const PostInfoPage: React.FC = () => {
  const { id = '' } = useParams();

  return <PostInfo postId={id} />;
};
