import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import fetchArticles from "../actions/articles/getArticles.action";
import stack from "../../constants/stacks";
import PaginationLogic from "../../helpers/paginationLogic";

const Pagination =  (props, func, calc) => {
  return (
    <div>
      {props.props.articles ? (
        <div>
          { props.props.articles.map(article => (
          <div>
            <div
              className="col-lg-4 col-md-12"
              id="card"
              key={article._id}
            >
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
                    <p>
                      {moment(article.createdAt, "YYYYMMDD").fromNow()}
                    </p>
                    <hr />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <div>Nothing</div>
      )}
      <div className="pg-btn-holder">
        <PaginationLogic props={props} loadMore={() => func} />
      </div>
    </div>
  );
};

export default Pagination;
