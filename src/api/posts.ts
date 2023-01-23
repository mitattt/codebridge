import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getPosts = () => {
  return client.get<Post[]>('/');
};

export const getById = (id: string) => {
  return client.get<Post>(`/${id}`);
};
