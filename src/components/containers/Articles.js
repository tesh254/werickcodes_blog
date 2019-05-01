import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import fetchArticles from "../actions/articles/getArticles.action";
import stack from "../../constants/stacks";

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isLoading: true
    };
  }

  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

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
    let calc = 0;
    return (
      <div className="posts">
        {isLoading ? (
          <div>
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        ) : (
          <div>
            {!articles ? (
              <div>Error</div>
            ) : (
              this.shuffle(articles).map(article => (
                <div className="col-lg-6 col-md-12" id="card">
                  <Link
                    to={{
                      pathname: `/articles/${article.slug}`,
                      article: article
                    }}
                    className="link"
                  >
                    <div className="content" key={calc++}>
                      <div className="stack">
                        <img
                          src={stack[`${article.stack}`]}
                          alt={article.stack}
                        />
                      </div>
                      <div className="post-title">
                        <h1 className="header">{article.title}</h1>
                        <p className="description">{article.description}</p>
                        <p>{moment(article.createdAt, "YYYYMMDD").fromNow()}</p>
                        <hr />
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
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
