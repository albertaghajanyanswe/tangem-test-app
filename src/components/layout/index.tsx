import React, { FC } from 'react';
import { Box } from '@mui/material';
import CustomAppBar from '../navbar';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const loading = false;

  return !loading ? (
    <Box>
      <Box><CustomAppBar /></Box>
      {children}
    </Box>
  ) : (<>Loading</>);
};

export default Layout;