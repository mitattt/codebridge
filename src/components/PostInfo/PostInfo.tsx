/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import { Container } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getById } from '../../api/posts';
import { Post } from '../../types/Post';
import { Loader } from '../Loader';
import styles from './PostInfo.module.scss';

type Props = {
  postId: string;
}

export const PostInfo: React.FC<Props> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currPostInfo, setCurrPostInfo] = useState<Post>();

  const loadPost = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await getById(postId);

      setCurrPostInfo(response);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  return (
    <article className={styles.postPage}>
      {isLoading
        ? <Loader />
        : (
          <>
            <img
              src={currPostInfo?.imageUrl}
              alt="postImage"
              className={styles.postPage__img}
            />

            <div className={styles.wrapper}>
              <Container sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bottom: '100px',
                padding: {
                  xs: '35px 40px 50px 40px',
                  sm: '35px 40px 50px 40px',
                  md: '35px 75px 50px 75px',
                  lg: '35px 75px 50px 75px',
                  xl: '35px 75px 50px 75px',
                },
                border: '1px solid #EAEAEA',
                boxShadow: '0px 8px 24px rgba(0,0,0, 0.05)',
                borderRadius: '5px',
                backgroundColor: '#FFF',
              }}>
                <h2 className={styles.postPage__title}>{currPostInfo?.title}</h2>
                <p className={styles.postPage__content}>
                  {currPostInfo?.summary}
                </p>
                <Link to={'/'} className={styles.postPage__link}>
                  Back to homepage
                </Link>
              </Container>
            </div>
            <h2>
            </h2>
          </>
        )
      }
    </article>
  );
};
