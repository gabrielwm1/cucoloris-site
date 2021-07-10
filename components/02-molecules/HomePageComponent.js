import {
  Button,
  Box,
  Avatar,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useStyles } from './HomePageComponent.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const HomePageComponent = () => {
  const classes = useStyles();
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1);
  }, []);
  const desktopView = useMediaQuery('(min-width:960px)');
  return (
    <Box className={classes.videoPlayerContainer}>
      <video
        width='100%'
        height='100%'
        loop
        muted
        ref={videoRef}
        playsInline
        className={classes.video}
      >
        <source src='/assets/videos/carpe4diem.mp4' type='video/mp4' />
      </video>
      <div className={classes.overlay}>
        <Box
          px={2}
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box className={classes.topContainer}>
            <h1 className={classes.title}>Cucoloris Pictures</h1>
            {desktopView && (
              <div className={classes.text}>
                <p>
                  Website by <span className={classes.salmon}>Gabe Wilk</span>{' '}
                </p>
              </div>
            )}
          </Box>
          <Box className={classes.middleContainer}>
            <h3 className={classes.text}>
              Cucoloris is the production company of{' '}
              <span className={classes.lightGreen}>Theo Schear</span> based in
              Oakland, CA. THEO WAS A{' '}
              <span className={classes.lightPurple}>
                2021 SFFILM FILMHOUSE RESIDENT
              </span>{' '}
              AND RECENT CLIENTS INCLUDE{' '}
              <span className={classes.orange}>EMPIRE RECORDS</span>,{' '}
              <span className={classes.blue}>CREATIVE WEST</span> and{' '}
              <span className={classes.yellowGreen}>
                The Huey Newton Foundation
              </span>
              .
            </h3>
            {!desktopView && (
              <div className={classes.text}>
                <p>
                  Website by <span className={classes.salmon}>Gabe Wilk</span>{' '}
                </p>
              </div>
            )}
          </Box>
          <div className={classes.bottomContainer}>
            <Grid container spacing={'16'} justify={'flex-start'}>
              <Grid item xs={12} sm={6} className={classes.workContainer}>
                <h2 className={classes.text}>work</h2>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.timerContainer}>
                <p className={classes.text}>timer</p>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default HomePageComponent;
