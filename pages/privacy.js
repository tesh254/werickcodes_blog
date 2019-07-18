import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import SubscriptionForm from "../components/subscribtionForm";
import "../static/styles/about.css";
import "../static/styles/index.css";
import "../static/styles/privacy.css";
import "../static/styles/root.css";

class Privacy extends React.Component {
  static async getInitialProps(props) {
    const { isServer } = props;

    return { isServer };
  }

  render() {
    return (
      <div>
        <Head
          title="Werick Privacy"
          description="Werick Codes Privacy Policy"
          image="/static/img/mascot.png"
        />
        <Nav />
        <div className="privacy">
          <div className="p-content">
            <div className="about-your-host">
              <h2 className="the-title">Privacy and Policy</h2>
              <p>
                This Application collect some of your personal data which we use
                for the following purposes and used in the following services:{" "}
              </p>
            </div>
            <div className="about-intro-paragraph">
              <p>
                <ul>
                  <li>
                    <h1>
                      <span className="emoji">💲</span> Advertisements
                    </h1>
                    <br />
                    <span className="p-desc">
                      Personal Data: Cookies and Usage Data
                    </span>
                  </li>
                  <li>
                    <h1>
                      <span className="emoji">📈</span> Analytics
                    </h1>
                    <br />
                    <span className="p-desc">Fathom Analytics</span>
                  </li>
                  <li>
                    <h1>
                      ️<span className="emoji">📰</span> Newsletter
                    </h1>
                    <br />
                    <span className="p-desc">
                      If you opt in to my newsletter, we will use your email and
                      name to share latest news in the software development
                      through email
                    </span>
                  </li>
                  <li>
                    <h1>
                      ️<span className="emoji">☎️</span> Contact the User
                    </h1>
                    <br />
                    <span className="p-desc">
                      Contact form. Personal Data: email address, first name and
                      last name
                    </span>
                  </li>
                </ul>
                <hr />
                <div className="c-info">
                  <h3 className="the-title">Contact Information</h3>
                  <section>
                    Owner and Data controller is Erick Wachira (Werick Codes)
                    <br />
                    Owner contact email: erick@werick.codes
                  </section>
                </div>
              </p>
            </div>
          </div>
        </div>
        <SubscriptionForm />
        <Footer />
      </div>
    );
  }
}

export default Privacy;
