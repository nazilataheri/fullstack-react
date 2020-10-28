import React, { Component } from "react";
import debounce from "lodash.debounce";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    const inputTerm = event.target.value;
    this.setState({ searchTerm: inputTerm }, this.doSearch());
  };
  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default SearchBar;
