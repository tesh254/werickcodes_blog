import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Component
import AboutComponent from "../components/About";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Werick Codes"
        keywords={[`Erick Wachira`, `Werick`, `About Werick`]}
      />
      <AboutComponent />
    </Layout>
  );
};

export default About;
