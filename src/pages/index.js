import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Views
import Articles from "../views/Articles";

// Css
import "../styles/home.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Werick Codes"
        keywords={[
          `react`,
          `javascript`,
          `nodejs`,
          `docker`,
          `mongodb`,
          `python`
        ]}
      />
      <h1 className="domain">
        Werick Codes{" "}
        <span role="img" aria-label="laptop">
          💻
        </span>
      </h1>
      <Articles />
    </Layout>
  );
};

export default IndexPage;
