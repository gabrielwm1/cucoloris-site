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
    overflow: 'hidden',
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
      fontSize: '1.75rem',
      '& p': {
        fontSize: '1.75rem',
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
    [theme.breakpoints.up('sm')]: {
      '&:hover': {
        color: theme.palette.primary.salmon,
        opacity: '0.5',
      },
    },
  },
  homeTitle: {
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
    minHeight: '18rem',
    [theme.breakpoints.up('sm')]: {
      minHeight: '0rem',
    },
  },
  workContainer: {
    order: 1,
    '& h2': {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
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
    '&:hover': {
      opacity: '0.5',
    },
  },
  lightPurple: {
    color: theme.palette.primary.lightPurple,
    '&:hover': {
      opacity: '0.5',
    },
  },
  orange: {
    color: theme.palette.primary.orange,
    '&:hover': {
      opacity: '0.5',
    },
  },
  blue: {
    color: theme.palette.primary.blue,
    '&:hover': {
      opacity: '0.5',
    },
  },
  yellowGreen: {
    color: theme.palette.primary.yellowGreen,
    '&:hover': {
      opacity: '0.5',
    },
  },
  salmon: {
    color: theme.palette.primary.salmon,
    '&:hover': {
      opacity: '0.5',
    },
  },
  hoverInfoButton: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.salmon,
      opacity: '0.5',
    },
  },
}));
