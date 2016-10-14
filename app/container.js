/* Wrapper for pages so header and footer modules would be on the page without adding them */

import React from "react"

import Header       from "./components/header/component"
import MoviesList   from "./components/movies_list/component"
import Footer       from "./components/footer/component"

export default class extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <Header className="pure-u-1" />
        <div className="pure-u-1">
          {this.props.children}
        </div>
        <Footer className="pure-u-1" />
      </div>
    );
  }
}