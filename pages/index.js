import Head from 'next/head';
// import Image from "next/image";
import styles from '../styles/Home.module.css';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomePageComponent from '../components/02-molecules/HomePageComponent';
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: theme.typography.regular,
    color: theme.palette.primary.red,
    fontSize: '2.5rem',
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Cucoloris Pictures</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='A production company based in Oakland, CA'
        />
      </Head>
      {/* <Container> */}
      <HomePageComponent />
      {/* </Container> */}
    </>
  );
}
// export async function getStaticProps() {
//   const reelVideo = await fetch(
//     `https://firebasestorage.googleapis.com/v0/b/cucoloris.appspot.com/o/2019Reel.mp4?alt=media&token=d984c7fc-58af-4b9a-b3ce-55dc43d094fa`
//   );

//   const mainVideo = await fetch(
//     `https://firebasestorage.googleapis.com/v0/b/cucoloris.appspot.com/o/carpe4diem.mp4?alt=media&token=388d7db7-cd83-49e9-b723-1fd824bce1cd`
//   );

//   return {
//     props: { reelVideo, mainVideo },
//     // revalidate: 6000,
//   };
// }
