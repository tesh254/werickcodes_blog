import React from "react";
import { Link } from "gatsby";
import { Icon } from "antd";
import "./index.css";

export default () => (
  <div className="footer">
    <div className="footer-content">
      <div className="l-act">
        <a
          href="https://twitter.com/werickdev?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="twitter" />
        </a>
        <br />
        <Link to="/privacy" className="f-link">
          <a className="f-link">Privacy</a>
        </Link>
        <br />
        <Link to="/about" className="f-link">
          <a className="f-link">About</a>
        </Link>
        <br />
        <a
          href="https://me.werick.codes"
          target="_blank"
          className="f-link"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </div>
    </div>
    <br />
    <br />
  </div>
);
