/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
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

  const fullContent = currPostInfo?.summary + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae autem obcaecati nulla voluptatum debitis, eaque tempora beatae tempore reiciendis molestias consequatur amet cumque deleniti fugiat eum sapiente illo animi delectus. Explicabo soluta esse debitis, officia obcaecati possimus tenetur aliquam eligendi quas expedita voluptate, mollitia, a ad! Exercitationem ducimus quod dicta aut voluptates. Saepe omnis harum esse quidem quod dicta voluptates debitis illum eos fugit earum nulla voluptas veritatis doloremque, in minus sapiente quam ducimus a perferendis magnam. Consequuntur, quam earum deleniti est ratione tempora voluptatem aut nam alias at.';

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
              <div className={styles.postPage__container}>
                <h2 className={styles.postPage__title}>{currPostInfo?.title}</h2>
                <p className={styles.postPage__content}>
                  {fullContent}
                </p>
                <Link to={'/'} className={styles.postPage__link}>
                  Back to homepage
                </Link>
              </div>
            </div>
            <h2>
            </h2>
          </>
        )
      }
    </article>
  );
};
