import React from "react";
import { connect } from "react-redux";

import addView from "../../state/actions/addView";
import ArticleModal from "./Modal";
import "./index.css";
import "../../styles/comment.css";

class SingleArticle extends React.Component {
  componentDidMount() {
    const { addView, slug } = this.props;

    addView(slug);
  }

  render() {
    const { isLoading, article } = this.props;
    return (
      <>
        <ArticleModal article={article} isLoading={isLoading} />
      </>
    );
  }
}

export default connect(null, { addView })(SingleArticle);
