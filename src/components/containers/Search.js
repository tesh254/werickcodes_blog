import React from "react";

class SearchForm extends React.Component {
    render() {
        return (
            <div className="search">
                <input type="search" name="query" id="search" placeholder="Search..."/>
                <i class="fas fa-search"></i>
            </div>
        )
    }
}

export default SearchForm;