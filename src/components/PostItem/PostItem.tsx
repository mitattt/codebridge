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
  const title = post.title.split(' ').slice(0, 7).join(' ') + '...';
  const content = post.summary
    .split(' ').slice(0, 16).join(' ') + '...';

  const date = new Date(post.publishedAt).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });
  const { imageUrl } = post;

  return (
    <article className={styles.postCard}>
      <Link to={`${post.id}`} className={styles.postCard__link_text}>
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
          <Link to={`/${post.id}`} className={styles.postCard__title}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={query.split(' ')}
              autoEscape={true}
              textToHighlight={title}
            />
          </Link>
        </h3>

        <p className={styles.postCard__content}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={query.split(' ')}
            autoEscape={true}
            textToHighlight={content}
          />
        </p>

        <h2>
          <Link to={`/${post.id}`} className={styles.postCard__link}>
            Read more
          </Link>
        </h2>
      </div>
    </article>
  );
};
