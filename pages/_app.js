import React from "react";
import { observer } from "mobx-react";
import "../styles/globals.css";
import "antd/dist/antd.compact.min.css";

const MyApp = observer(({ Component, pageProps }) => {
  return <Component {...pageProps} />;
});

export default MyApp;
