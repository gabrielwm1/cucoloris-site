import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50%, -50%)",
    margin: "0 auto",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  videoPlayerContianer: {
    position: "relative",
    backgroundColor: theme.palette.primary.white,
    width: "100%",
    height: "100%",
    color: theme.palette.primary.white,
    // @include aspect-ratio(16, 9);
    //
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
    width: "100vw",
    height: "100vh",
  },
  text: {
    fontFamily: theme.typography.bold,
    color: theme.palette.primary.white,
    textTransform: "uppercase",
    fontSize: "1.25rem",
  },
  topContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  middleContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "0rem",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "0rem 2rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 5rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 8rem",
    },
  },

  // .video {

  // }

  // .ratio-16by9 {
  //     @include aspect-ratio(16, 9);
  // }
}));
