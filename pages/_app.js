import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../theme/light-theme";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import "/styles/globals.css";
function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
export default MyApp;
