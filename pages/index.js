import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Container, Grid, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomePageComponent from "../components/02-molecules/HomePageComponent";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: theme.typography.regular,
    color: theme.palette.primary.red,
    fontSize: "2.5rem",
    fontWeight: "500",
    marginTop: 25,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Cucoloris Pictures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HomePageComponent />
      </Container>
    </div>
  );
}
