import React from "react";
import { connect } from "react-redux";

import fetchArticles from "../state/actions/getArticles";

// Components
import ArticleComponent from "../components/Articles";

class IndexPage extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;

    fetchArticles();
  }

  render() {
    const { isLoading, articles } = this.props;
    return (
      <>
        <ArticleComponent articles={articles} isLoading={isLoading} />
      </>
    );
  }
}

export default connect(
  state => ({
    articles: state.articles.articles,
    isLoading: state.articles.isLoading
  }),
  { fetchArticles }
)(IndexPage);
