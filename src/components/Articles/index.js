import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import SingleArticleComponent from "../../components/Article";
import stack from "../../utils/stack";
import "./index.css";
import "../../styles/loader.css";
import "../../styles/article.css";
import "../../styles/home.css";

let calc = 0;

const ArticleComponent = ({ isLoading, articles }) => (
  <div className="posts">
    {isLoading ? (
      <div className="loaders">
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      </div>
    ) : (
      <div className="container">
        {!articles ? (
          <div>Error</div>
        ) : (
          articles.map(article => (
            <div id="card" key={article._id}>
              <a href={`#openModal-article-${article.slug}`} className="link">
                <a className="link">
                  <div className="content" key={calc++}>
                    <div className="stack">
                      <img
                        src={stack[`${article.stack}`]}
                        alt={article.stack}
                      />
                    </div>
                    <div className="post-title">
                      <p className="header">{article.title}</p>
                      <p className="date">
                        {moment(article.createdAt, "YYYYMMDD").fromNow()}
                      </p>
                      {/* <p className="tags">
                          {article.stack}
                        </p> */}
                    </div>
                  </div>
                </a>
              </a>
              <SingleArticleComponent slug={article.slug} article={article} />
            </div>
          ))
        )}
      </div>
    )}
  </div>
);

export default ArticleComponent;
