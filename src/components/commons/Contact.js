/* eslint-disable */

import React from "react";
import Metas from "../commons/MetaTags";
import mascot from "../../assets/img/img.png";

const ContactForm = () => (
  <div>
    <Metas
      title="Contact Werick"
      description="Get in touch with Werick Codes"
      image={mascot}
    />
    <form action="https://formspree.io/ewachira254@gmail.com" className="form-contact" method="POST">
      <h1>Contact Form</h1>
      <input type="text" placeholder="Enter your full name" name="name" /><br/><br/>
      <input type="email" placeholder="Enter your valid email" name="_replyto" /><br/><br/>
      <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea><br/><br/>
      <button type="submit">Talk to me😁</button>
    </form>
  </div>);

export default ContactForm;