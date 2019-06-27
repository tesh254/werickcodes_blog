/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from "react";
import Head from "../components/head";
import Link from "next/link";
import { withRouter } from "next/router";
import SubscriptionForm from "../components/subscribtionForm";
import "../static/styles/404.css";

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    var response;
    switch (this.props.errorCode) {
      case 404:
        response = (
          <div>
            <Head
              title="Not Found"
              description="The page was not found"
            />
            <div className="not-found-container">
              <div className="not-found-holder">
                <div className="not-found-image-holder">
                  <img src="/static/svg/404.svg" className="not-found-image" alt="" />
                </div>
                <div className="not-found-message">
                  Nothing here to see, seems you lost <br />{" "}
                  <Link href="/" id="link">
                    <a className="link">Click here to go to home</a>
                  </Link>
                </div>
              </div>
              <SubscriptionForm />
            </div>
          </div>
        );
        break;
      case 500:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
          </div>
        );
        break;
      default:
        response = (
          <div>
              <h1 className="display-4">HTTP {this.props.errorCode} Error</h1>
              <p>
                An <strong>HTTP {this.props.errorCode}</strong> error occurred
                while trying to access{" "}
                <strong>{this.props.router.pathname}</strong>
              </p>=
          </div>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);
