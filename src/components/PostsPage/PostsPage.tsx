// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState, useEffect } from 'react';
import styles from './PostsPage.module.scss';

import { getPosts } from '../../api/posts';
import { Post } from '../../types/Post';
import { PostItem } from '../PostItem';
import { Loader } from '../Loader';
import { SearchBar } from '../SearchBar';
import errorImage from '../../assets/img/error.png';

export const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const loadPosts = useCallback(async() => {
    try {
      setIsLoading(true);

      const allPosts = await getPosts();

      setPosts(await allPosts);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const includesQuery = (string: string) => string.toLocaleLowerCase()
    .includes(query.toLocaleLowerCase().trim());

  const postsFilteredByTitle = posts.filter(
    post => includesQuery(post.title),
  );

  const postsFilteredBtSummary = posts.filter(
    post => includesQuery(post.summary),
  );

  const filteredPosts = [...postsFilteredByTitle, ...postsFilteredBtSummary];
  const newPosts = filteredPosts
    .filter((el, i) => filteredPosts.indexOf(el) === i);

  return (
    <>
      <h4 className={styles.text}>Filter by keywords</h4>
      <div className={styles.seachBar}>
        <SearchBar query={query} onChangeQuery={setQuery} />
      </div>

      <h4 className={styles.postsPage__totalItems}>
        Results: {newPosts.length}
      </h4>

      <div className={styles.line}></div>

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.catalog}>
            {newPosts.length > 0
              ? (
                newPosts.map((post) => (
                  <PostItem
                    key={post.id}
                    post={post}
                    query={query}
                  />
                ))
              )
              : (
                <>
                  <img
                    src={errorImage}
                    alt="errorImage"
                    className={styles.error__image}
                  />
                  <h1 className={styles.error__text}>There is nothing more</h1>
                </>
              )
            }
          </div>
        )}
      </div>
    </>
  );
};
