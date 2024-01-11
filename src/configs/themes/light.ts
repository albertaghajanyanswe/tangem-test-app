import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
  }

  interface PaletteColor {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#D7A830',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
    },
    secondary: {
      main: '#D7A830',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  mode: 'light',
  ...defaultColors,
};

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 932,
      lg: 1024,
      xl: 1200,
    },
  },
});

export default theme;
