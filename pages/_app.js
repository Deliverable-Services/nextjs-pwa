import React from "react";
import Router from "next/router";
import { config } from "../config";
import {
  PageHead,
  Header,
  Notifications,
  // - FOR Google Analytics Page View
  googlePageview,
} from "../components";

Router.events.on("routeChangeComplete", (path) => googlePageview(path));

const MyApp = ({ Component, pageProps, router }) => {
  const { title, description } = pageProps;

  return (
    <>
      <PageHead title={title} description={description} path={router.asPath} />

      <Header title={config.appName} />

      <main>
        <Component {...pageProps} {...router} />
      </main>

      <Notifications />
    </>
  );
};
export default MyApp;
