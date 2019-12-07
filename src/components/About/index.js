import React from "react";
import { TwitterFollowButton, TwitterMentionButton } from "react-twitter-embed";
import "./index.css";

export default () => (
  <div style={{ paddingTop: "25px" }}>
    <div className="ab-comp">{/* <p className="ab-dm">About Werick</p> */}</div>
    <div className="the-content">
      <div className="intro-paragraph">
        <p>
          Werick is born out of a love for the web and sharing knowledge. Be a
          beginner, intermediate or a god of code, you can grasp our content
          even when you are in a toilet seat, wait that just went weird.
          <br />
        </p>
      </div>
      <br />
      <br />
      <div className="your-host">
        <h1 className="the-title">Your host</h1>
        {/* <img
          src="https://me.werick.codes/static/media/me.484f1866.png"
          alt="me"
          className="me-image"
        /> */}
        {/* <br /> */}
        <p>
          Hey there!{" "}
          <span role="img" aria-labelledby>
            👋
          </span>{" "}
          I'm Wachira.
          <br />I am available for hire, get my portfolio{" "}
          <a
            href="https://me.werick.codes"
            rel="noopener noreferrer"
            className="link"
            target="_blank"
          >
            here
          </a>
          .I have been a full stack web developer
          <span role="img" aria-labelledby>
            💻
          </span>{" "}
          for the last two years, one year working professionally. Apart from
          coding I blog ✍️, play soccer ⚽️ and video games 🎮. Reach out to me
          on Twitter
          {"      "}
          <TwitterFollowButton screenName={"wachira_dev"} />{" "}
          <TwitterMentionButton screenName={"wachira_dev"} />
        </p>
      </div>
    </div>
  </div>
);
