import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SearchPageView from "../views/Search";

const SearchPage = () => (
  <Layout>
    <SEO
      title="Search"
      keywords={[
        `react`,
        `javascript`,
        `nodejs`,
        `docker`,
        `mongodb`,
        `python`
      ]}
    />
    <SearchPageView />
  </Layout>
);

export default SearchPage;
