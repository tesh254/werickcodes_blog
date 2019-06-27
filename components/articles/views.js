import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import addView from "../../redux/actions/articles/addView";

class Views extends React.Component {
  componentDidMount() {
    const { addView, slug } = this.props;
    addView(slug);
  }

  render() {
    return null;
  }
}

Views.propTypes = {
  addView: PropTypes.func.isRequired,
  slug: PropTypes.string
};

export default connect(
  null,
  {
    addView
  }
)(Views);
