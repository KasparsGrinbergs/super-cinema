import React                from "react"
import { connect }          from "react-redux"
import axios                from "axios"
import { addMoviesToList }  from "../../actions"

import style                from "./style.scss"

import Movie            from "../movie/component"

class MoviesList extends React.Component {

  constructor(props) {
    super(props);
    axios.get("/api/movies")
      .then((res) => {
        this.props.setMovies(res.data);
      });
  }

  render() {
    return (
      <div className={"movies-list " + this.props.className}>
        <h2 className="list-title">{this.props.title}</h2>
        <ul>
          {Object.keys(this.props.movies)
            .filter((key) => {
              return (this.props.movies[key]
                .Title
                .toLowerCase()
                .indexOf(this.props.filter.toLowerCase()) !== -1);
            })
            .map((key) => {
              return <li className="pure-u-1-4" key={key}>
                <Movie
                  poster      = {this.props.movies[key].Poster}
                  title       = {this.props.movies[key].Title}
                  year        = {this.props.movies[key].Released}
                  id          = {key} />
              </li>
            })}
        </ul>
      </div>
    );
  }
}
MoviesList.propTypes = {
  title   : React.PropTypes.string
};
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
)(MoviesList);