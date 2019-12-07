import React from "react";
import { Reddit, Twitter, Facebook } from "react-social-sharing";
import Markdown from "react-markdown";
import moment from "moment";
import CodeBlock from "../../utils/code";
import stack from "../../utils/stack";
import Comments from "../../utils/comments";

const ArticleModal = ({ article, isLoading }) => (
  <div id={`openModal-article-${article.slug}`} className="modalDialog">
    <div>
      <a href="#close" title="Close" class="close">
        X
      </a>

      {/* Article content */}
      <div>
        {isLoading ? (
          <div className="posts">
            <div className="lds-ripple" style={{ paddingTop: 100 + "%" }}>
              <div />
              <div />
            </div>
          </div>
        ) : (
          <div>
            <div className="single-article-header">
              <div className="stack-highlight">
                <img src={stack[`${article.stack}`]} alt={article.stack} />
              </div>
              <div className="blog-header">{article.title || ""}</div>
              <p>{article.description}</p>
              <br />
              <div className="share-icons">
                <Reddit
                  link={`https://werick.codes/articles/${article.slug}`}
                />
                <Facebook
                  link={`https://werick.codes/articles/${article.slug}`}
                />
                <Twitter
                  link={`https://werick.codes/articles/${article.slug}`}
                />{" "}
                &nbsp;
              </div>
            </div>
            <div className="single-article-body">
              <div className="body">
                <div>
                  <Markdown
                    source={article.body}
                    renderers={{ code: CodeBlock }}
                  />
                </div>
              </div>
            </div>
            <div className="extra-content">
              <div className="extra">
                <i className="fas fa-eye" /> {article.views} views
                <div className="published">
                  <pre>
                    Published: {moment(article.createdAt, "YYYYMMDD").fromNow()}
                  </pre>
                </div>
              </div>
            </div>
            {/* <div className="comments">
              <Comments
                id={article._id}
                title={article.title}
                path={`/articles/${article.slug}`}
              />
            </div> */}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ArticleModal;
