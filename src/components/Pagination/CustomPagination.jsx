import React from 'react';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(({ theme, isDarkMode }) => ({
  '& .MuiPaginationItem-root': {
    color: isDarkMode ? '#000000' : '#ffffff',
    borderColor: isDarkMode ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 255, 255, 1)',
    '&:hover': {
      backgroundColor: isDarkMode ? 'rgba(198, 31, 31, 0.4)' : 'rgba(255, 255, 255, 0.4)',
    },
    '&.Mui-selected': {
      backgroundColor: '#C61F1F',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#d00',
      },
    },
  },
}));

const CustomPagination = ({ isDarkMode, ...props }) => {
  return <StyledPagination isDarkMode={isDarkMode} {...props} />;
};

export default CustomPagination;