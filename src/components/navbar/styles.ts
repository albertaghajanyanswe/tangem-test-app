import { Theme } from "@mui/system";

export const stylesWithTheme = (theme: Theme) => ({
  root: {
    '& > .MuiPaper-root': {
    // todo move theme
      backgroundColor: '#0B0B0B',
      height: '54px',
      justifyContent: 'center',
      top: '54px',
      '& > .MuiToolbar-root': {
        paddingLeft: 0,
        paddingRight: 0,
        minHeight: '54px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }
    },
  },
  normal: {
    color: 'white',
    fontWeight: 400
  },
  bold: {
    color: 'white',
    fontWeight: 600
  },
  colorize: {
    color: theme.palette.primary.main
  }
});