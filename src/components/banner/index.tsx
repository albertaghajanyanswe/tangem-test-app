import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { stylesWithTheme } from './styles';
import Typography from '@mui/material/Typography';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';
import CustomButton from '../../components/button';
import cardImg from '../../assets/img.png';

function Banner({
  handleCloseBanner
}: {
  handleCloseBanner: () => void
}) {
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPC = useMediaQuery(theme.breakpoints.up('md'));

  return (
    // <Box sx={{ ...muiStyles.root, borderRadius: isMobile ? 0 : '16px', width: isMobile ? '100%' : (isTablet || isPC) ? 600 : 600, backgroundImage: `url(${cardImg})`, backgroundPositionX: isMobile ? '-150px' : 0, backgroundRepeat: 'no-repeat' }}>
    <Box sx={{ ...muiStyles.root, borderRadius: isMobile ? 0 : '16px', width: isMobile ? '100%' : (isTablet || isPC) ? 600 : 600 }}>
      <Box component='img' src={cardImg} alt="icon" sx={{ position: 'absolute', top: '8px', left: isMobile ? '-150px' : '8px' }} />
      <Box sx={{ width: isMobile ? '100%' : '55%', padding: '15px', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', width: 'fit-content' }}>
            <CloseSVG onClick={handleCloseBanner} />
            </Box>
            </Box>
        <Typography sx={{ ...muiStyles.bold, ...muiStyles.bigText }}>Black Friday</Typography>
        <Typography sx={{ ...muiStyles.bold, ...muiStyles.gradient, ...muiStyles.bigText }}>10%OFF</Typography>
        <Typography sx={{ ...muiStyles.normal, mt: '14px', fontWeight: 600 }}>Use code
          <Box component='span' sx={{ ...muiStyles.bold, ...muiStyles.colorize }}> 10FRIDAY</Box> at checkout </Typography>
        <CustomButton label={isMobile ? 'Shop now' : 'Shop now through Monday'} sx={{ mt: '40px' }} btnType='secondary' />
      </Box>
    </Box>
  );
}

export default Banner;