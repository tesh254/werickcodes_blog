import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
// import { faDiscord, faFacebook, faTwitter } from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import "../static/styles/footer.css";

// fontawesome.library.add(faDiscord, faFacebook, faTwitter);

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="l-act">
        <a
          href="https://twitter.com/werickdev"
          target="_blank"
          className="f-link"
          rel="noopener noreferrer"
        >
          Follow Us
        </a>
        <br />
        <Link href="/privacy" className="f-link">
          <a className="f-link">Privacy</a>
        </Link>
        <br />
        <Link href="/about" className="f-link">
          <a className="f-link">About</a>
        </Link>
        <br />
        <Link href="/contact" className="f-link">
          <a className="f-link">Contact</a>
        </Link>
      </div>
    </div><br/>
    <br/>
    {/* <div className="footer-extra">
      <a
        href="https://www.facebook.com/Werickdev-389055598344100/"
        target="_blank"
        className="s-link"
        rel="noopener noreferrer"
      >
        <Icon icon="facebook" />
      </a>{" "}
      &nbsp;
      <a
        href="https://discord.gg/pXjDHEK"
        target="_blank"
        className="s-link"
        rel="noopener noreferrer"
      >
        <Icon icon="discord" />
      </a>{" "}
      &nbsp;
      <a
        href="https://twitter.com/werickdev?ref_src=twsrc%5Etfw"
        target="_blank"
        className="s-link"
        rel="noopener noreferrer"
      >
        <Icon icon="twitter" />
      </a>{" "}
      &nbsp;
    </div> */}
  </div>
);

export default Footer;
