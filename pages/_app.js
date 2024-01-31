import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
