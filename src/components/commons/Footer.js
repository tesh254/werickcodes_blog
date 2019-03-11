import React from "react";
import { NavLink, Link } from "react-router-dom";
import mascot from "../../assets/svg/mascot.svg";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="l-act">
        <NavLink to="/follow" className="f-link">
          Follow Us
        </NavLink><br/>
        <NavLink to="/privacy" className="f-link">
          Privacy
        </NavLink><br/>
        <NavLink to="/about" className="f-link">
          About
        </NavLink><br/>
        <NavLink to="/donate" className="f-link">
          Donate
        </NavLink>
      </div>
    </div>
    <div className="footer-extra">
      <i class="fab fa-facebook fa-3x" /> &nbsp;
      <i class="fab fa-slack fa-3x" /> &nbsp;
      <i class="fab fa-twitter-square fa-3x" /> &nbsp;
      <i class="fab fa-instagram fa-3x" />
    </div>
  </div>
);

export default Footer;
