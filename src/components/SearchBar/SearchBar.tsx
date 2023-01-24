/* eslint-disable no-use-before-define */
import React from 'react';
import search from '../../assets/img/Vector.svg';
import {
  FormControl, InputAdornment, OutlinedInput,
} from '@mui/material';

type Props = {
  query: string
  onChangeQuery: (value: string) => void
}

export const SearchBar: React.FC<Props> = ({ query, onChangeQuery }) => {
  return (
    <FormControl
      sx={{
        width: {
          lg: '600px',
          md: '600px',
          sm: '100%',
          xs: '100%',
        },
      }}
      className="filter__input"
      onSubmit={(e) => e.preventDefault()}
    >
      <OutlinedInput
        placeholder='What are you looking for?'
        sx={{
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
          height: '50px',
          border: '1px solid #EAEAEA',
          borderRadius: '5px',
          font: 'inherit',
        }}
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
        startAdornment={(
          <InputAdornment position="start">
            <img src={search} alt="search" />
          </InputAdornment>
        )}
      />
    </FormControl>
  );
};
