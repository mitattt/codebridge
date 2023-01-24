// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Button } from '@mui/material';

export const ButtonGoToUp: React.FC = () => {
  return (
    <Button
      sx={{
        border: '1px solid grey',
        color: '#000',
      }}
      variant="outlined"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Go to top
    </Button>

  );
};
