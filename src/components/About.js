/* eslint-disable */

import React from "react";
import me from "../assets/img/me.jpg";

const About = () => (
  <div>
    <div className="ab-comp">
      <p className="domain ab-dm">About Werick</p>
    </div>
    <hr />
    <div className="the-content">
      <div className="intro-paragraph">
        <p>
          Werick is born out of a love for the web and sharing knowledge. Be a
          beginner, intermediate or a god of code, you can grasp our content
          even when you are in a toilet seat, wait that just went weird.
          <br />
          The Werick User Interface might look familiar, I got inspiration from{" "}
          <a
            href="https://alligator.io"
            rel="noopener noreferrer"
            className="link"
            target="_blank"
          >
            alligator.io
          </a>
        </p>
      </div>
      <br />
      <br />
      <div className="your-host">
        <h1 className="the-title">Your host</h1>
        <img src={me} alt="me" className="me-image" />
        <br />
        <p>
          Hey there!{" "}
          <span role="img" aria-labelledby>
            👋
          </span>{" "}
          I'm Wachira.
          <br />I currently work at{" "}
          <a
            href="https://andela.com"
            rel="noopener noreferrer"
            className="link"
            target="_blank"
          >
            Andela
          </a>{" "}
          as a Software Developer. I am definetly passionate about software
          development. I have been a web developer
          <span role="img" aria-labelledby>
            💻
          </span>{" "}
          for the last two years. Apart from programming I am a love playing FPS
          games{" "}
          <span role="img" aria-labelledby>
            🎮
          </span>
          .
        </p>
      </div>
    </div>
  </div>
);

export default About;
