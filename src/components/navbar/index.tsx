import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/system';
import { Fade, useMediaQuery } from '@mui/material';
import { stylesWithTheme } from './styles';
import { ReactComponent as IconPcSVG } from '../../assets/icon-pc.svg';
import { ReactComponent as IconTabletSVG } from '../../assets/icon-tablet.svg';
import { ReactComponent as IconMobileSVG } from '../../assets/icon-mobile.svg';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';
import { ReactComponent as RightArrowSVG } from '../../assets/right-arrow.svg';
import { ReactComponent as DotSVG } from '../../assets/dot.svg';
import CustomButton from '../button';
import Banner from '../banner';

interface Props {
  windowCb?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, windowCb } = props;
  const trigger = useScrollTrigger({
    target: windowCb ? windowCb() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <></>}
    </Slide>
  );
}

function ScrollBottom(props: Props) {
  const theme = useTheme();
  const { children, windowCb } = props;
  const bannerStatus = window.localStorage.getItem('bannerStatus') || 'opened';
  const isBannerClosed = bannerStatus === 'closed';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const trigger = useScrollTrigger({
    target: windowCb ? windowCb() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return isBannerClosed ? null : (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: isMobile ? 0 : isTablet ? 17 : 34, ...(isMobile ? {width: '100%'} : {}) }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function CustomAppBar(props: Props) {
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  const bannerStatus = window.localStorage.getItem('bannerStatus') || 'opened';
  const [bannerState, setBannerState] = useState(bannerStatus);
  const isBannerClosed = bannerState === 'closed';

  const handleCloseBanner = () => {
    window.localStorage.setItem('bannerStatus', 'closed');
    setBannerState('closed');
  }

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPC = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={muiStyles.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Box sx={{ display: 'flex' }}>
              {isPC && <IconPcSVG />}
              {isTablet && <IconTabletSVG />}
              {isMobile && <IconMobileSVG />}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={muiStyles.bold}>Black Friday,
                <Box component='span' sx={muiStyles.normal}>
                  {isPC && <Box component='span'> 24-27 Nov</Box>}
                </Box>
              </Typography>
              {!isMobile && <Box sx={{ display: 'flex', m: '0 12px' }}><DotSVG /></Box>}
              <Typography sx={{ ...muiStyles.bold, ...muiStyles.colorize, ml: isMobile ? 1 : 0 }}>10%OFF</Typography>
              {!isMobile && <Box sx={{ display: 'flex', m: '0 12px' }}><DotSVG /></Box>}
              {!isMobile && <Typography sx={muiStyles.normal}>Use code
                <Box component='span' sx={{ ...muiStyles.bold, ...muiStyles.colorize }}>10FRIDAY</Box>
                {isPC && <Box component='span'> at checkout</Box>}
              </Typography>}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '22px' }}>
              {!isMobile && <CustomButton label='Shop now' btnType='primary' />}
              {isPC && <Box sx={{ ml: '14px', cursor: 'pointer' }}>
                <CloseSVG />
              </Box>}
              {isMobile && <Box sx={{ ml: '14px', cursor: 'pointer' }}>
                <RightArrowSVG />
              </Box>}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {!isBannerClosed && <ScrollBottom {...props}>
        <Banner handleCloseBanner={handleCloseBanner} />
      </ScrollBottom >}
    </Box >
  );
}