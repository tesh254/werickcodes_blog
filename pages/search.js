import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "next/link";
import moment from "moment";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import searchQuery, { clearSearch } from "../redux/actions/search/search";
import stack from "../utils/stacks";
import "../static/styles/search.css";
import "../static/styles/posts.css";
import "../static/styles/article.css";
import "../static/styles/loader.css";
import "../static/styles/home.css";
import "../static/styles/root.css";
import "../static/styles/index.css";

class SearchForm extends React.Component {
  state = {
    query: ""
  };

  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

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
        <Head
          title="Werick Codes: Search"
          description="Find what you interested in"
          url="https://werick.codes/search"
        />
        <Nav />
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
            <div className="posts">
              {results.length > 0 ? (
                <div className="container">
                  {results.map(blog => (
                    <div
                      className="col-lg-4 col-md-12"
                      id="card"
                      key={blog._id}
                    >
                      <Link href={`/articles/${blog.slug}`} className="link">
                        <a className="link">
                          <div className="content" key={calc++}>
                            <div className="stack">
                              <img
                                src={stack[`${blog.stack}`]}
                                alt={blog.stack}
                              />
                            </div>
                            <div className="post-title">
                              <p className="header">{blog.title}</p>
                              <p className="date">
                                {moment(blog.createdAt, "YYYYMMDD").fromNow()}
                              </p>
                              <hr />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : query.length === 0 ? (
                <p className="search-type">
                  Type...
                  <span role="img" aria-label="happy">
                    😁
                  </span>
                </p>
              ) : (
                <p className="search-no-result">
                  <span role="img" aria-label="sad">
                    😞
                  </span>
                  No results
                  <span role="img" aria-label="sad">
                    😞
                  </span>
                </p>
              )}
            </div>
          )}
        </div>
        <Footer />
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

export default connect(
  mapStateToProps,
  { searchQuery, clearSearch }
)(SearchForm);
