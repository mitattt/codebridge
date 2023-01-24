/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types/Post';
import Highlighter from 'react-highlight-words';

import styles from './PostItem.module.scss';

type Props = {
  post: Post;
  query: string
};

export const PostItem: React.FC<Props> = ({ post, query }) => {
  const { title, summary, id, publishedAt, imageUrl } = post;
  const newTitle = title.length <= 70
    ? title
    : `${post.title.slice(0, 70).trim()}...`;

  const content = summary.length <= 100
    ? post.summary
    : `${summary.slice(0, 97).trim()}...`;

  const hasMore = newTitle.length > 70 || summary.length > 100;
  const date = new Date(publishedAt).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <article className={styles.postCard}>
      <Link to={`${id}`} className={styles.postCard__link_text}>
        <img
          src={imageUrl}
          alt="postImage"
          className={styles.postCard__link_img}
        />
      </Link>

      <div className={styles.postCard__container}>
        <h6 className={styles.postCard__date}>
          {date}
        </h6>

        <h3>
          <Link to={`/${id}`} className={styles.postCard__title}>
            <Highlighter
              searchWords={query.split(' ')}
              autoEscape={true}
              textToHighlight={newTitle}
            />
          </Link>
        </h3>

        <p className={styles.postCard__content}>
          <Highlighter
            searchWords={query.split(' ')}
            autoEscape={true}
            textToHighlight={content}
          />
        </p>

        {hasMore && (
          <h2>
            <Link to={`/${id}`} className={styles.postCard__link}>
              Read more
            </Link>
          </h2>
        )}
      </div>
    </article>
  );
};
