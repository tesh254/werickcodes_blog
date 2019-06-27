import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faInfoCircle,
  faEnvelope
} from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import navFunction from "../static/js/main";
import "../static/styles/index.css";
import "../static/styles/nav.css";

fontawesome.library.add(faBars, faSearch, faInfoCircle, faEnvelope);

const Nav = () => (
  <div>
    <div className="topnav" id="myTopnav">
      <Link href="/" id="link" className="active">
        <a>
          <img
            src="/static/svg/mascot.svg"
            alt="mascot-logo"
            className="logo"
          />
        </a>
      </Link>
      <Link href="/about" id="link">
        <a className="right-link">
          <div className="nav-icon">
            <Icon icon="info-circle" size="2x" />
          </div>
          <div className="nav-label">About</div>
        </a>
      </Link>
      <Link href="/search" id="link">
        <a className="right-link">
          <div className="nav-icon">
            <Icon icon="search" size="2x" />
          </div>
          <div className="nav-label">Search</div>
        </a>
      </Link>
      <Link href="/contact" id="link">
        <a className="right-link">
          <div className="nav-icon">
            <Icon icon="envelope" size="2x" />
          </div>
          <div className="nav-label">Contact</div>
        </a>
      </Link>
    </div>
  </div>
);

export default Nav;
