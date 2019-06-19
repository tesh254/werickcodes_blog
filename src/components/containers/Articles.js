import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import fetchArticles from "../actions/articles/getArticles.action";
import stack from "../../constants/stacks";
import Pagination from "../commons/Pagination";

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

  loadMore = () => {
    const { fetchArticles } = this.props;
    const { current_page, pages } = this.props.articles;
    console.log(this.props.articles)
    if (current_page === pages) {
      fetchArticles(current_page);
    }
    else {
      fetchArticles(current_page + 1);
    }
  };

  prevBlogs = () => {
    const { fetchArticles } = this.props;
    const { current_page, pages } = this.props.articles;
    console.log(this.props.articles)
    if (pages - current_page >= 1) {
      fetchArticles(current_page);
    }
    else {
      fetchArticles(current_page - 1);
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    const { pages, blog_count, current_page } = this.props.articles;
    let calc = 0;
    return (
      <div className="posts">
        {isLoading ? (
          <div className="loaders">
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
              <Pagination
                props={{ articles, pages, blog_count, current_page }}
                nextFunc={this.loadMore}
                calc={calc}
                prevFunc={this.prevBlogs}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.object,
  isLoading: PropTypes.bool
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
