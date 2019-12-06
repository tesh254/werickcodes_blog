import React from "react";
import Link from "next/link";
import "../static/styles/header.css";

const Nav = () => {
  return (
    <div>
      <header>
        <div class="logo-holder">
          <Link href="/" id="link" className="active">
            <a>
              <img
                src="/static/svg/mascot.svg"
                alt="mascot-logo"
                className="logo"
                style={{ width: 55 + "px", marginLeft: "45%" }}
              />
            </a>
          </Link>
        </div>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul className="menu-list">
            <li className="menu-list-item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <Link href="/search">
                <a>Search</a>
              </Link>
            </li>
            <li className="menu-list-item">
              <a target="_blank" href="https://me.werick.codes">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span />
        </label>
      </header>
    </div>
  );
};

export default Nav;
