import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { placeholder, className, onChangeHandler } = this.props;

    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}
