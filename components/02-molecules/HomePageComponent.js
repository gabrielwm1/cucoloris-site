import {
  Button,
  Box,
  Avatar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useStyles } from "./HomePageComponent.styles";

const HomePageComponent = () => {
  const classes = useStyles();
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 50);
  }, []);
  return (
    <Box className={classes.videoPlayerContainer}>
      <video
        width="100%"
        height="100%"
        loop
        muted
        ref={videoRef}
        playsInline
        className={classes.video}>
        <source src="/assets/videos/carpe4diem.mp4" type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <Box
          px={2}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Box className={classes.topContainer}>
            <h1 className={classes.text}>Cucoloris Pictures</h1>
          </Box>
          <Box className={classes.middleContainer}>
            <h3 className={classes.text}>
              Cucoloris is the production company of <span>Theo Schear</span>{" "}
              based in Oakland, CA
            </h3>
          </Box>
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <p>hey this is footer</p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
      {/* <div>
        <p className={classes.title}>hey</p>
      </div> */}
    </Box>
  );
};

export default HomePageComponent;
