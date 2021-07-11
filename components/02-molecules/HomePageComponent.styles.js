import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
    margin: '0 auto',
    minHeight: '100vh',
    width: '100%',
    objectFit: 'cover',
  },

  videoPlayerContainer: {
    backgroundColor: theme.palette.primary.white,
    width: '100vh',
    color: theme.palette.primary.white,
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    width: '100vw',
    height: '100vh',
  },
  text: {
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.white,
    textTransform: 'uppercase',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
      '& p': {
        fontSize: '1rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.75rem',
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.white,
    textTransform: 'uppercase',
    fontSize: '1.75rem',
    textAlign: 'center',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  middleContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0rem',
    texAlign: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 8rem',
    },
  },
  bottomContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    minHeight: '13rem',
    [theme.breakpoints.up('sm')]: {
      minHeight: '0rem',
    },
  },
  workContainer: {
    order: 1,
    // marginBottom: '5rem',
    '& h2': {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      // marginBottom: '0rem',
      order: 2,
      '& h2': {
        textAlign: 'end !important',
      },
    },
  },
  timerContainer: {
    order: 2,
    '& p': {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      order: 1,
      '& p': {
        textAlign: 'start',
      },
    },
  },
  neonGreen: {
    color: theme.palette.primary.neonGreen,
  },
  lightPurple: {
    color: theme.palette.primary.lightPurple,
  },
  orange: {
    color: theme.palette.primary.orange,
  },
  blue: {
    color: theme.palette.primary.blue,
  },
  yellowGreen: {
    color: theme.palette.primary.yellowGreen,
  },
  salmon: {
    color: theme.palette.primary.salmon,
  },
}));
