// eslint-disable-next-line no-use-before-define
import React from 'react';
import { PostsPage } from '../../components/PostsPage';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className='page__section'>
      <div className={styles.homePage__container}>
        <PostsPage />
      </div>
    </div>
  );
};
