import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#202124',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'unset',
        backgroundColor: "#aaa"
      }
    },
    MuiSvgIcon: {
      root: {
        color: '#000',
        opacity: 0.54,
      },
    },
  },
});

export default theme