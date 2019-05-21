import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import Markdown from "react-markdown";
import { Twitter, Facebook, Reddit } from "react-social-sharing";
import CodeBlock from "../commons/code";
import fetchOneArticle from "../actions/articles/getOneArticle.action";
import stack from "../../constants/stacks";
import Metas from "../commons/MetaTags";
import addView from "../actions/articles/addView.action";
import Comments from "../commons/Comments";

class SingleArticle extends React.Component {
  // Define the constructor
  constructor() {
    super();
    this.state = {
      article: {},
      errors: {},
      isLoading: true
    };
  }

  componentDidMount() {
    // Get the slud from the params of the url
    const slug = this.props.match.params.slug;
    // Dispatch the view count action
    this.props.addView(slug);
    // Dispatch the fetch one article by slug action
    this.props.fetchOneArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      // If nextProps the update local state
      this.setState({
        article: nextProps.article.payload,
        isLoading: nextProps.article.isLoading
      });
    }
  }

  handleComment = comment => {
    console.log(comment.text);
  };

  render() {
    // Destructure state values
    const { article, isLoading } = this.state;
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
            {/* Set the meta tags according to article */}
            <Metas
              title={article.title}
              description={article.title}
              image={stack[`${article.stack}`]}
            />
            <div className="single-article-header">
              <div className="stack-highlight">
                <img src={stack[`${article.stack}`]} alt={article.stack} />
              </div>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <hr />
              <br />
              <div className="share-icons">
                <Reddit link={`https://werick.tk/articles/${article.slug}`} />
                <Facebook link={`https://werick.tk/articles/${article.slug}`} />
                <Twitter
                  link={`https://werick.tk/articles/${article.slug}`}
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
      </div>
    );
  }
}

SingleArticle.propTypes = {
  fetchOneArticle: PropTypes.func.isRequired,
  article: PropTypes.object,
  isLoading: PropTypes.bool,
  addView: PropTypes.func.isRequired
};

SingleArticle.defaultProps = {
  article: {},
  isLoading: true
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  article: state.article
});

export default connect(
  mapStateToProps,
  {
    fetchOneArticle,
    addView
  }
)(SingleArticle);
