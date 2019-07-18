import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import getArticles from "../redux/actions/articles/getArticles";
import Articles from "../components/articles/articles";
import SubscriptionForm from "../components/subscribtionForm";
import "../static/styles/index.css";

class Home extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    await store.dispatch(getArticles());

    return { isServer };
  }

  render() {
    const { articles, isLoading } = this.props;
    return (
      <div>
        <Head
          title="Werick Codes"
          description="Get started with coding the easy way"
          ogImage="/static/img/twitter.png"
          url="https://werick.codes"
        />
        <Nav />
        <h1 className="domain">Werick Codes 💻</h1>
        <Articles articles={articles} isLoading={isLoading} />
        <SubscriptionForm />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: bindActionCreators(getArticles, dispatch)
  };
};

const mapStateToProps = state => ({
  articles: state.articles.payload,
  isLoading: state.articles.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
