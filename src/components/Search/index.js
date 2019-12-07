import React from "react";
import moment from "moment";

import stack from "../../utils/stack";
import SingleArticleComponent from "../../components/Article";

import "./index.css";
import "../../styles/loader.css";
import "../../styles/article.css";
import "../../styles/home.css";
import "../Articles/index.css";

let calc = 0;

const SearchMiniComponent = ({
  handleSearchQueryChange,
  results,
  isLoading,
  query
}) => (
  <>
    <div className="search-view-holder" id="link">
      <input
        type="search"
        name="query"
        id="search"
        placeholder="Search..."
        onChange={handleSearchQueryChange}
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
                <div className="col-lg-4 col-md-12" id="card" key={blog._id}>
                  <a href={`#openModal-article-${blog.slug}`} className="link">
                    <a className="link">
                      <div className="content" key={calc++}>
                        <div className="stack">
                          <img src={stack[`${blog.stack}`]} alt={blog.stack} />
                        </div>
                        <div className="post-title">
                          <p className="header">{blog.title}</p>
                          <p className="date">
                            {moment(blog.createdAt, "YYYYMMDD").fromNow()}
                          </p>
                        </div>
                      </div>
                    </a>
                  </a>
                  <SingleArticleComponent slug={blog.slug} article={blog} />
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
  </>
);

export default SearchMiniComponent;
