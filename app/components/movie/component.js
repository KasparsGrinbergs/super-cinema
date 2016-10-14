import React from "react"
import { Link } from "react-router"
import style from "./style.scss"

export default class MovieItem extends React.Component {
  render() {
    return (
      <div className={"movie-item " + this.props.className}>
        <Link to={`/movie/${this.props.id}`}>
          <img src={this.props.poster !== "N/A" ? this.props.poster : "/"} />

          <div className="description">
            <h3>{this.props.title}</h3>
            <span>({this.props.year})</span>
          </div>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

MovieItem.propTypes = {
  poster  : React.PropTypes.string.isRequired,
  title   : React.PropTypes.string.isRequired,
  year    : React.PropTypes.string
};