import React from "react";
import { connect } from "react-redux";

import search, { clearSearch } from "../state/actions/search";

import SearchMiniComponent from "../components/Search";

class SearchPageView extends React.Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const { search } = this.props;
    this.setState({
      [e.target.name]: e.target.value
    });
    search(e.target.value);
  };

  componentDidMount() {
    const { clearSearch } = this.props;
    clearSearch();
  }

  render() {
    const { isLoading, results } = this.props;
    const { query } = this.state;
    return (
      <>
        <SearchMiniComponent
          query={query}
          results={results || []}
          isLoading={isLoading}
          handleSearchQueryChange={this.handleChange}
        />
      </>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.search.isLoading,
    results: state.search.results
  }),
  { search, clearSearch }
)(SearchPageView);
