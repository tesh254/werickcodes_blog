import React from "react";
import { NavLink } from "react-router-dom";
// import mascot from "../../assets/svg/mascot.svg";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="l-act">
        <a
          href="https://twitter.com/werickdev"
          target="_blank"
          className="f-link"
        >
          Follow Us
        </a>
        <br />
        <NavLink to="/privacy" className="f-link">
          Privacy
        </NavLink>
        <br />
        <NavLink to="/about" className="f-link">
          About
        </NavLink>
        <br />
        {/* <NavLink to="/donate" className="f-link">
          Donate
        </NavLink> */}
      </div>
    </div>
    <div className="footer-extra">
      <a
        href="https://www.facebook.com/Werickdev-389055598344100/"
        target="_blank"
        className="s-link"
      >
        <i class="fab fa-facebook fa-3x" />
      </a>{" "}
      &nbsp;
      <a href="https://werickdevs.slack.com/" target="_blank" className="s-link">
      <i class="fab fa-slack fa-3x" /></a> &nbsp;
      <a href="https://twitter.com/werickdev" target="_blank" className="s-link">
      <i class="fab fa-twitter-square fa-3x" /></a> &nbsp;
      {/* <i class="fab fa-instagram fa-3x" /> */}
    </div>
  </div>
);

export default Footer;
