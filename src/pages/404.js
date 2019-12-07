import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/404.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
      <div className="not-found-container">
        <div className="not-found-holder">
          <div className="not-found-image-holder">
            <img
              src="https://res.cloudinary.com/duoxba7n1/image/upload/v1576050439/404.svg"
              className="not-found-image"
              alt=""
            />
          </div>
          <div className="not-found-message">
            Nothing here to see, seems you lost <br />{" "}
            <Link to="/" id="link">
              <a className="link">Click here to go to home</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
