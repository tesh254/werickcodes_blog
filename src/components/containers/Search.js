import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";
import searchQuery, { clearSearch } from "../actions/search/searchAction";

import stack from "../../constants/stacks";

class SearchForm extends React.Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const { searchQuery } = this.props;
    this.setState({
      [e.target.name]: e.target.value
    });
    searchQuery(e.target.value);
  };

  componentDidMount() {
    const { clearSearch } = this.props;
    clearSearch();
  }

  render() {
    const { isLoading, results } = this.props;
    const { query } = this.state;
    let calc = 0;
    return (
      <div>
        <div className="search-view-holder" id="link">
          <input
            type="search"
            name="query"
            id="search"
            placeholder="Search..."
            onChange={this.handleChange}
            autoFocus
          />
        </div>
        <div className="search-results">
          {isLoading ? (
            <div className="loaders">
              <div className="lds-ripple">
                <div />
                <div />
              </div>
            </div>
          ) : (
            <div>
              {results.length > 0 ? (
                <div className="posts">
                  {results.map(blog => (
                    <div
                      className="col-lg-4 col-md-12"
                      id="card"
                      key={blog._id}
                    >
                      <h2 className="top-result">
                        <span role="img" aria-label="cup">
                          🏆
                        </span>{" "}
                        Top Result
                        <span role="img" aria-label="cup">
                          🏆
                        </span>
                      </h2>
                      <Link
                        to={{
                          pathname: `/articles/${blog.slug}`,
                          article: blog
                        }}
                        className="link"
                      >
                        <div className="content" key={calc++}>
                          <div className="stack">
                            <img
                              src={stack[`${blog.stack}`]}
                              alt={blog.stack}
                            />
                          </div>
                          <div className="post-title">
                            <h1 className="header">{blog.title}</h1>
                            <p className="description">{blog.description}</p>
                            <p>
                              {moment(blog.createdAt, "YYYYMMDD").fromNow()}
                            </p>
                            <hr />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : query.length === 0 ? (
                <h1 className="search-type">
                  Type...
                  <span role="img" aria-label="happy">
                    😁
                  </span>
                </h1>
              ) : (
                <h1 className="search-no-result">
                  <span role="img" aria-label="sad">
                    😞
                  </span>
                  No results
                  <span role="img" aria-label="sad">
                    😞
                  </span>
                </h1>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchQuery: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  results: PropTypes.array,
  error: PropTypes.string
};

SearchForm.defaultProps = {
  isLoading: false,
  results: [],
  error: ""
};

const mapStateToProps = ({ search }) => ({
  results: search.results,
  error: search.error,
  isLoading: search.isLoading
});

export default withRouter(
  connect(
    mapStateToProps,
    { searchQuery, clearSearch }
  )(SearchForm)
);
