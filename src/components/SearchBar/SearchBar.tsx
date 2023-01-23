/* eslint-disable no-use-before-define */
import React from 'react';
import styles from './SearchBar.module.scss';
import search from '../../assets/img/Vector.svg';

type Props = {
  query: string
  onChangeQuery: (value:string) => void
}

export const SearchBar: React.FC<Props> = ({ query, onChangeQuery }) => {
  return (
    <form
      action="/"
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <img
        src={search}
        alt="search"
        className={styles.image}
      />
      <input
        type="text"
        className={styles.search}
        placeholder="What are you looking for?"
        name='searchBar'
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
      />
    </form>
  );
};
