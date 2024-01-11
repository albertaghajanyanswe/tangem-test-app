import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/system';
import { stylesWithTheme } from './styles';

function CustomButton({
  label,
  variant,
  onClick,
  sx,
  btnType = 'primary'

}: {
  label: string,
  variant?: 'outlined' | 'contained' | 'text';
  onClick?: () => void;
  sx?: any;
  btnType?: 'secondary' | 'primary';
}) {
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  const btnStyle = btnType === 'primary' ? muiStyles.primaryBtn : btnType === 'secondary' ? muiStyles.secondaryBtn : {};

  return (
    <Button
      disableRipple
      variant={variant}
      onClick={onClick}
      sx={{ ...muiStyles.button, ...btnStyle, ...sx }}
    >
      {label}
    </Button>
  )
}

export default CustomButton;