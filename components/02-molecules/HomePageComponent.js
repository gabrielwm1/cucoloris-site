import { Button, Box, Avatar, Typography } from "@material-ui/core";
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
      {/* <div>
        <p className={classes.title}>hey</p>
      </div> */}
    </Box>
  );
};

export default HomePageComponent;
