//Renders the single movie page
import React from "react"
import MoviePoster from "../components/movie_poster/component"
import MovieDescription from "../components/movie_description/component"
import axios from "axios"
import { connect } from "react-redux"
import { addMoviesToList } from "../actions"

class Movie extends React.Component {
  constructor(props) {
    super(props);
    document.title = `About - ${props.params.id}`;

    if(!props.movies[props.params.id]) {
      axios.get("/api/movies")
        .then((res) => {
          this.props.setMovies(res.data);
        });
    }
  }

  render() {
    let movie = this.props.movies[this.props.params.id];
    return (
      <div className="movie-page-wrapper">
        { !movie ?
          <p className="loading">Loading movie information</p>
          :
          <div className="movie-page">
            <MoviePoster className = "movie-poster" id = {this.props.params.id} />
            <MovieDescription className = "movie-description" id = {this.props.params.id} />
            {/* TODO: Show comments */}
          </div>
        }
      </div>
    );
  }
}
export default connect(
  (state) => {
    return {
      movies: state.movies
    };
  },
  (dispatch) => {
    return {
      setMovies: (movies) => {
        dispatch(addMoviesToList(movies));
      }
    };
  }
)(Movie);