import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  video: {
    // position: "relative",
    // width: "100%",
    // height: "400px",
    // left: 0,
    // top: 0,
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
  },

  // .video {

  // }

  // .ratio-16by9 {
  //     @include aspect-ratio(16, 9);
  // }
}));
