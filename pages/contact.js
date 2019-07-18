/* eslint-disable */

import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../static/styles/form.css";

class ContactForm extends React.Component {
  static async getInitialProps(props) {
    const { isServer } = props;

    return { isServer };
  }

  render() {
    return (
      <div>
        <Head
          ogImage="https://res.cloudinary.com/duoxba7n1/image/upload/v1542922495/mascot_5.jpg"
          title="About Werick Codes"
          description="All about Werick Codes"
        />
        <Nav />
        <form
          action="https://formspree.io/ewachira254@gmail.com"
          className="form-contact"
          method="POST"
        >
          <h1>Contact Form</h1>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            autoFocus
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter your valid email"
            name="_replyto"
          />
          <br />
          <br />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          />
          <br />
          <br />
          <button type="submit">Talk to me😁</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default ContactForm;
