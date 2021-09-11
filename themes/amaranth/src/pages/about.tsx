import * as React from "react";
import { Helmet } from "react-helmet";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../layouts";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="about-container">
        درباره من
        <Helmet title={`About | ${config.website.title}`} />
      </div>
    </Layout>
  );
};

export default AboutPage;
