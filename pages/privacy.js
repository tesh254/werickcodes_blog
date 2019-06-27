import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import SubscriptionForm from "../components/subscribtionForm";
import "../static/styles/about.css";
import "../static/styles/index.css";
import "../static/styles/privacy.css";

class Privacy extends React.Component {
  static async getInitialProps(props) {
    const { isServer } = props;

    return { isServer };
  }

  render() {
    return (
      <div className="p-content">
        <Head
          title="Werick Privacy"
          description="Werick Codes Privacy Policy"
          image="/static/img/mascot.png"
        />
        <Nav />
        <div className="your-host">
          <h2 className="the-title">Privacy and Policy</h2>
          <p>This Application collect some Personal Data from its users.</p>
        </div>
        <div className="intro-paragraph">
          <p>
            Personal Data collected for the following purposes and used in the
            following services
            <ul>
              <li>
                <i class="fab fa-adversal" /> <h1>Advertisements</h1>
                <br />
                Personal Data: Cookies and Usage Data
              </li>
              <li>
                <i class="fas fa-chart-line" /> <h1>Analytics</h1>
                <br />
                Fathom Analytics
              </li>
              <li>
                <i class="far fa-envelope-open" /> <h1>Contact the User</h1>
                <br />
                Contact form. Personal Data: email address, first name and last
                name
              </li>
            </ul>
            <hr />
            <div className="c-info">
              <h3 className="lte">Contact Information</h3>
              <section>
                Owner and Data controller is Werick Blog, Westlands, Nairobi
                Kenya,
                <br />
                Owner contact email: werickblog@gmail.com
              </section>
            </div>
          </p>
        </div>
        <SubscriptionForm />
        <Footer />
      </div>
    );
  }
}

export default Privacy;
