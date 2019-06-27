import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import moment from "moment";
import ScrollButton from "../scrollbtn";
import stack from "../../utils/stacks";
import "../../static/styles/posts.css";
import "../../static/styles/loader.css";
import "../../static/styles/bootstrap/css/bootstrap.css";
import "../../static/styles/home.css";

const Articles = ({ articles, isLoading }) => {
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
            articles.map(article => (
              <div className="col-lg-4 col-md-12 col-xl-2" id="card" key={article._id}>
                <Link href={`/articles/${article.slug}`} className="link">
                  <a className="link">
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
                  </a>
                </Link>
              </div>
            ))
          )}
        </div>
      )}
      <ScrollButton />
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.payload,
  isLoading: state.articles.isLoading
});
export default connect(
  mapStateToProps,
  null
)(Articles);
