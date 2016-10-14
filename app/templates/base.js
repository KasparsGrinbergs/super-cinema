// Start page that lists all available movies and contains header/footer

import React from "react"
import Header from "../components/header/component"
import MoviesList from "../components/movies_list/component"
import Footer from "../components/footer/component"

export default class extends React.Component {
  constructor(props) {
    super(props);
    document.title = `Super Cinema - online movies rental service`;

    this.state = {
      filter: ""
    };
  }

  setFilter(filter) {
    this.setState({
      filter: filter.target.value
    });
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header className="header" />
        <MoviesList className = "movies-list"
                    title = "Available movies"
                    filter = {this.state.filter} />
        <Footer className="footer" />
      </div>
    );
  }
}