import { createTheme } from '@material-ui/core/styles';
import '../styles/Home.module.css';

const Theme = createTheme({
  typography: {
    bold: 'BMW-Bold, Arial',
    light: 'BMW-Light, Arial',
    regular: 'BMW-Regular, Arial',
  },
  palette: {
    primary: {
      main: '#30B4FF',
      white: '#FFFFFF',
      salmon: '#FF9A9A',
      neonGreen: '#9DFFA5',
      lightPurple: '#DC9EFF',
      orange: '#FFCF5B',
      blue: '#74D0FF',
      yellowGreen: '#CFFF5B',
    },
    secondary: {
      main: '#FAB513',
    },
  },

  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'Montserrat-Regular, Arial',
      },
      body2: {
        fontFamily: 'Montserrat-Regular, Arial',
      },
    },
    MuiFormControl: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,

        '@media (max-width: 900px)': {
          flexDirection: 'column',
        },

        '& label': {
          fontWeight: 700,
          alignSelf: 'center',

          '@media (max-width: 900px)': {
            marginBottom: 10,
            alignSelf: 'start',
          },
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: '#F3F3F3',
        height: 47,
        paddingLeft: 25,
        fontSize: '1rem',
        width: '60vw',
        marginLeft: 'auto',

        '@media (max-width: 900px)': {
          width: '100%',
        },
      },
      inputMultiline: {
        padding: '0 25px',
      },
      multiline: {
        minHeight: 47,
        height: 'auto',
      },
    },
    MuiContainer: {
      maxWidthLg: {
        '@media (min-width: 1065px)': {
          maxWidth: '1065px',
        },
      },
    },
    MuiSelect: {
      outlined: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      },
      select: {
        '& :focus': {
          backgroundColor: 'transparent',
        },
        paddingLeft: 20,
      },
      selectMenu: {
        height: '100%',
      },
    },
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 769,
    lg: 1200,
    xl: 1920,
  },
});

export default Theme;
