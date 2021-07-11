import {
  Button,
  Box,
  Avatar,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useStyles } from './HomePageComponent.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const HomePageComponent = () => {
  const classes = useStyles();
  const videoRef = useRef();
  const [workSelected, setWorkSelected] = useState(false);
  const [videoSrc, setVideoSrc] = useState('assets/videos/carpe4diem.mp4');
  const [infoSelected, setInfoSelected] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [centiSeconds, setCentiSeconds] = useState(0);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  useEffect(() => {
    const msInterval = setInterval(() => {
      if (milliseconds === 60) {
        setMilliseconds(0);
      } else {
        setMilliseconds(milliseconds + 1);
      }
      // console.log('testing');
    }, 10);
    return () => {
      clearInterval(msInterval);
    };
  }, [milliseconds]);

  useEffect(() => {
    const secInterval = setInterval(() => {
      if (seconds === 60) {
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(secInterval);
    };
  }, [seconds]);

  useEffect(() => {
    const minInterval = setInterval(() => {
      if (minutes === 60) {
        setMinutes(0);
      } else {
        setMinutes(minutes + 1);
      }
    }, 60000);
    return () => {
      clearInterval(minInterval);
    };
  }, [minutes]);

  useEffect(() => {
    const hourInterval = setInterval(() => {
      if (hours === 24) {
        setHours(0);
      } else {
        setHours(hours + 1);
      }
    }, 3600000);
    return () => {
      clearInterval(hourInterval);
    };
  }, [hours]);

  useEffect(() => {
    if (workSelected) {
      setInfoSelected(false);
      setVideoSrc('/assets/videos/2019Reel.mp4');
    } else {
      setVideoSrc('/assets/videos/carpe4diem.mp4');
    }
    videoRef.current.load();
    videoRef.current.play();
  }, [workSelected]);

  const handleWorkSelected = () => {
    setWorkSelected(!workSelected);
  };

  const handleInfoSelected = () => {
    setInfoSelected(!infoSelected);
    setWorkSelected(false);
  };

  const handleHomeButton = () => {
    setInfoSelected(false);
    setWorkSelected(false);
  };
  const desktopView = useMediaQuery('(min-width:600px)');
  return (
    <div>
      <Box className={classes.videoPlayerContainer}>
        <video
          width='100%'
          height='100%'
          loop
          muted
          ref={videoRef}
          playsInline
          className={classes.video}>
          <source src={videoSrc} type='video/mp4' />
        </video>

        <div className={classes.overlay}>
          <Box
            px={2}
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Box className={classes.topContainer}>
              <h1
                className={classes.title}
                style={{ cursor: 'pointer' }}
                onClick={() => handleHomeButton()}>
                Cucoloris Pictures
              </h1>

              <Box display={'flex'} justifyContent={'center'}>
                {desktopView ? (
                  <>
                    <h2
                      className={classes.text}
                      onClick={() => handleWorkSelected()}
                      style={{ cursor: 'pointer' }}>
                      {workSelected ? 'back' : 'work'}
                    </h2>
                  </>
                ) : (
                  <>
                    {!infoSelected && (
                      <div
                        style={{
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        onClick={() => handleInfoSelected()}
                        className={classes.text}>
                        <p>Info</p>
                      </div>
                    )}
                  </>
                )}
              </Box>
            </Box>
            {infoSelected && (
              <>
                <Box className={classes.middleContainer}>
                  <h3 className={classes.text}>
                    Cucoloris is the production company of{' '}
                    <span className={classes.neonGreen}>
                      <a
                        href='https://theoschear.com/'
                        rel='noreferrer'
                        target='_blank'>
                        Theo Schear
                      </a>
                    </span>{' '}
                    based in Oakland, CA. THEO WAS A{' '}
                    <span className={classes.lightPurple}>
                      <a
                        href='https://sffilm.org/supported-projects/hard-to-swallow/'
                        rel='noreferrer'
                        target='_blank'>
                        2021 SFFILM FILMHOUSE RESIDENT
                      </a>
                    </span>{' '}
                    AND RECENT CLIENTS INCLUDE{' '}
                    <span className={classes.orange}>
                      {' '}
                      <a
                        href='https://www.youtube.com/watch?v=NC2eq9SZatw'
                        rel='noreferrer'
                        target='_blank'>
                        EMPIRE RECORDS
                      </a>
                    </span>
                    ,{' '}
                    <span className={classes.blue}>
                      {' '}
                      <a
                        href='https://www.creativewest.co/'
                        rel='noreferrer'
                        target='_blank'>
                        CREATIVE WEST
                      </a>
                    </span>{' '}
                    and{' '}
                    <span className={classes.yellowGreen}>
                      <a
                        href='https://hueypnewtonfoundation.org/'
                        rel='noreferrer'
                        target='_blank'>
                        The Huey Newton Foundation
                      </a>
                    </span>
                    .
                    {!desktopView && (
                      <div className={classes.text}>
                        <p>
                          Website by{' '}
                          <span className={classes.salmon}>
                            <a
                              href='mailto:gabe.wilk@gmail.com'
                              rel='noreferrer'
                              target='_blank'>
                              Gabe Wilk
                            </a>
                          </span>{' '}
                        </p>
                      </div>
                    )}
                  </h3>
                </Box>
              </>
            )}

            <div className={classes.bottomContainer}>
              <Grid container style={{ alignItems: 'center' }}>
                <Grid item xs={12} sm={6} className={classes.workContainer}>
                  {desktopView ? (
                    <>
                      <Box>
                        {infoSelected ? (
                          <>
                            {desktopView && (
                              <div
                                className={classes.text}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'flex-end',
                                }}>
                                <p>
                                  Website by{' '}
                                  <span className={classes.salmon}>
                                    <a
                                      href='mailto:gabe@gmail.com'
                                      rel='noreferrer'
                                      target='_blank'>
                                      Gabe Wilk
                                    </a>
                                  </span>
                                </p>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'flex-end',
                              }}
                              onClick={() => handleInfoSelected()}
                              className={classes.text}>
                              <p>Info</p>
                            </div>
                          </>
                        )}
                      </Box>
                    </>
                  ) : (
                    <>
                      <h2
                        className={classes.text}
                        onClick={() => handleWorkSelected()}
                        style={{ cursor: 'pointer' }}>
                        {workSelected ? 'back' : 'work'}
                      </h2>
                    </>
                  )}
                </Grid>
                <Grid item xs={12} sm={6} className={classes.timerContainer}>
                  <p className={classes.text}>
                    0{days}:{hours < 10 ? '0' : ''}
                    {hours}:{minutes < 10 ? '0' : ''}
                    {minutes}:{seconds < 10 ? '0' : ''}
                    {seconds}:{milliseconds < 10 ? '0' : ''}
                    {milliseconds}
                  </p>
                </Grid>
              </Grid>
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default HomePageComponent;
