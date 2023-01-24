/* eslint-disable no-use-before-define */
import React from 'react';
import styles from './WrongPage.module.scss';

export const WrongPage: React.FC = () => {
  return (
    <div className={styles.text}>
      <h1>Something went wrong</h1>
    </div>
  );
};
