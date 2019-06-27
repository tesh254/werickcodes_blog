import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Twitter, Facebook, Reddit } from "react-social-sharing";
import Markdown from "react-markdown";
import moment from "moment";
import ScrollButton from "../scrollbtn";
import CodeBlock from "../code";
import Comments from "./comments";
import stack from "../../utils/stacks";
import "../../static/styles/posts.css";
import "../../static/styles/loader.css";
import "../../static/styles/bootstrap/css/bootstrap.css";
import "../../static/styles/home.css";
import "../../static/styles/comment.css";

const SingleArticle = ({ article, isLoading }) => {
    return (
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
              <div className="blog-header">{article.title}</div>
              <p>{article.description}</p>
              <hr />
              <br />
              <div className="share-icons">
                <Reddit link={`https://werick.codes/articles/${article.slug}`} />
                <Facebook link={`https://werick.codes/articles/${article.slug}`} />
                <Twitter
                  link={`https://werick.codes/articles/${article.slug}`}
                />{" "}
                &nbsp;
              </div>
            </div>
            <div className="single-article-body">
              <hr />
              <div className="body">
                <div>
                  <Markdown
                    source={article.body}
                    renderers={{ code: CodeBlock }}
                  />
                </div>
              </div>
            </div>
            <hr />
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
            <div className="comments">
              <Comments
                id={article._id}
                title={article.title}
                path={`/articles/${article.slug}`}
              />
            </div>
          </div>
        )}
        <ScrollButton />
      </div>
    )
}

const mapStateToProps = state => ({
    article: state.article.payload,
    isLoading: state.article.isLoading
})

export default connect(
    mapStateToProps,
    null
)(SingleArticle);