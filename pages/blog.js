import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Views from "../components/articles/views";
import getSingleArticle from "../redux/actions/articles/getSingleArticle";
import OneArticle from "../components/articles/singleArticle";
import SubscriptionForm from "../components/subscribtionForm";
import "../static/styles/index.css";
import "../static/styles/root.css";

class SingleArticle extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, query } = props;
    await store.dispatch(getSingleArticle(query.slug));

    return { isServer };
  }

  render() {
    const { article, isLoading } = this.props;
    return (
      <div>
        <Head
          title={article.title || "Werick Codes Article"}
          description={article.description}
          url={`https://werick.codes/articles/${article.slug}`}
          ogImage="https://res.cloudinary.com/duoxba7n1/image/upload/v1562759356/Twitter_preview.png"
        />
        <Nav />
        <Views slug={article.slug} />
        <OneArticle article={article} isLoading={isLoading} />
        <SubscriptionForm />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleArticle: bindActionCreators(getSingleArticle, dispatch)
  };
};

const mapStateToProps = state => ({
  article: state.article.payload,
  isLoading: state.article.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticle);
