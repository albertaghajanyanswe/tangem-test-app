import { Theme } from "@mui/system";

export const stylesWithTheme = (theme: Theme) => ({
  button: {
    backgroundColor: 'white',
    // todo move theme
    color: '#0B0B0B',
    fontSize: '16px',
    fontWeight: 600,
    padding: '10px 19.5px',
    minWidth: 'fit-content',
    height: '38px',
    boxShadow: 'none',
    borderRadius: '50px',
    textTransform: 'none',
    width: 'max-content'
  },
  primaryBtn: {
    backgroundColor: 'white',
    // todo move theme
    color: '#0B0B0B',
    borderRadius: '50px',
    '&: hover': {
      backgroundColor: 'white'
    }
  },
  secondaryBtn: {
    // todo move theme
    backgroundColor: '#212121',
    color: 'white',
    borderRadius: '16px',
    height: '42px',
    '&: hover': {
    // todo move theme
      backgroundColor: '#212121'
    }
  },
});