import React from "react"
import { connect } from "react-redux"
import style from "./style.scss"

class MovieDescription extends React.Component {
  render() {
    let movie = this.props.movies[this.props.id];
    return (
      <div className={"movie-description " + this.props.className}>
        <h2 className="title">{movie.Title}</h2>
        <p className="release-date">{movie.Released}</p>
        <p className="genre">{movie.Genre}</p>

        <h3>Description</h3>
        <p className="plot">
          {movie.Plot}
        </p>

        <h3>Director</h3>
        <p>{movie.Director}</p>

        <h3>Cast</h3>
        <ul className="cast">
          {movie.Actors.split(",").map((actor) => {
            return <li key={actor}>{actor}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      movies: state.movies
    };
  }
)(MovieDescription);