import React from "react";
import fetchOneArticle from "../actions/articles/getOneArticle.action";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import Markdown from "react-markdown";
import CodeBlock from "../commons/code";

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {},
      errors: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchOneArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        article: nextProps.article.payload,
        isLoading: nextProps.article.isLoading
      });
    }
  }

  render() {
    const { article, isLoading } = this.state;
    const TITLE = document.getElementById("t");
    TITLE.innerHTML = "Werick- Single Article";
    // metaTag(
    //     this.state.article.blogs.title,
    //     this.state.article.blogs.description,
    //     this.state.article.blogs.title
    //   );
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
              <h1>{article.blogs.title}</h1>
              <p>{article.blogs.description}</p>
              <hr />
              <br />
              <div className="share-icons">
                <i class="fab fa-facebook" /> &nbsp;
                <i class="fab fa-slack" /> &nbsp;
                <i class="fab fa-twitter-square" /> &nbsp;
                {/* <i class="fab fa-instagram" /> */}
              </div>
            </div>
            <div className="single-article-body">
              <hr />
              <div className="body">
                <div>
                  <Markdown
                    source={article.blogs.body}
                    renderers={{ code: CodeBlock }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="extra">
              <i class="fas fa-eye" /> {article.blogs.views} views
              <div className="published">
                <pre>
                  Published:{" "}
                  {moment(article.blogs.createdAt, "YYYYMMDD").format("LL")}
                </pre>
              </div>
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
  isLoading: PropTypes.bool
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
    fetchOneArticle
  }
)(SingleArticle);
