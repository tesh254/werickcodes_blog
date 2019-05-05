import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import searchQuery from "../actions/search/searchAction";

class SearchForm extends React.Component {
  handleChange = e => {
    const { searchQuery } = this.props;
    searchQuery(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="search" id="link">
          <input
            type="search"
            name="query"
            id="search"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <i class="fas fa-search" />
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  searchQuery: PropTypes.func.isRequired,
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

export default withRouter(
  connect(
    mapStateToProps,
    { searchQuery }
  )(SearchForm)
);
