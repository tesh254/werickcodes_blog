import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import Loader from "react-loaders";

import fetchArticles from "../actions/articles/getArticles.action";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        articles: nextProps.articles.payload,
        isLoading: nextProps.articles.isLoading
      });
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    console.log(this.state);
    let calc = 0;
    return (
      <div className="posts">
        {isLoading ? (
          <div>
            <div class="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        ) : (
          <div>
            {this.state.articles.map(article => (
              <div className="col-lg-4 col-md-12" id="card">
                <Link
                  to={{ pathname: `/articles/${article.slug}` }}
                  className="link"
                >
                  <div className="content" key={calc++}>
                    <div className="post-title">
                      <h1 className="header">{article.title}</h1>
                      <p className="description">{article.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array,
  isLoading: true
};

Articles.defaultProps = {
  articles: [],
  isLoading: true
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  articles: state.articles
});

export default connect(
  mapStateToProps,
  {
    fetchArticles
  }
)(Articles);
