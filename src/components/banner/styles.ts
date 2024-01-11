import { Theme } from "@mui/system";

export const stylesWithTheme = (theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 349,
    boxShadow: 'none',
    backgroundSize: 'cover',
    transition: 'opacity 0.5s ease-in-out',
    // todo move theme
    backgroundColor: '#0B0B0B'
  },
  bigText: {
    fontSize: 46
  },
  normal: {
    fontWeight: 400,
    // todo move theme
    color: '#6C6C70',
  },
  bold: {
    color: 'white',
    fontWeight: 600
  },
  colorize: {
    color: theme.palette.primary.main
  },
  gradient: {
    background: 'linear-gradient(to right, #7D5317, #EDDF95)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
});