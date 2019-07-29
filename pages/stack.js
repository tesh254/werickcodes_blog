import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import getPostByStack from "../redux/actions/articles/getPostByStack";
import Articles from "../components/articles/articles";
import SubscriptionForm from "../components/subscribtionForm";
import StackPosts from "../components/articles/stacks";
import "../static/styles/index.css";

class PostsByStack extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, query } = props;
    await store.dispatch(getPostByStack(query.stack));

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
        <StackPosts />
        <Articles articles={articles} isLoading={isLoading} />
        <SubscriptionForm />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostByStack: bindActionCreators(getPostByStack, dispatch)
  };
};

const mapStateToProps = state => ({
  articles: state.articles.payload,
  isLoading: state.articles.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsByStack);
