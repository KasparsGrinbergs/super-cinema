import { actions } from "./actions"


// Options reducer
let optionReducer = (opt, action) => {
  switch(action.type) {

    case actions.CHANGE_VIDEO_VISIBILITY:
      return Object.assign({}, opt, {
        video_player_visible: action.visible
      });
    default:
      return opt;
  }
};

// Movie object reducer
let movieReducer = (movies, action) => {
  switch(action.type) {

    case actions.ADD_MOVIES_TO_LIST:

      // Turn movie array to movie object with imdbID as keys
      let movieObj = {};
      for (let key in action.movies) {
        movieObj[action.movies[key].imdbID] = action.movies[key];
      }

      return Object.assign({}, movies, movieObj);

    default:
      return movies;
  }
};

// Redux reducer that calculates new states when actions are passed to it
export default function(state, action) {
  switch(action.type) {

    case actions.CHANGE_VIDEO_VISIBILITY:
      return Object.assign({}, state, {
        options: optionReducer(state.options, action)
      });
    case actions.ADD_MOVIES_TO_LIST:
      return Object.assign({}, state, {
        movies: movieReducer(state.movies, action)
      });
    case actions.ADD_COMMENTS_TO_MOVIE:
      return Object.assign({}, state, {
        comments: commentReducer(state.comments, action)
      });
    case actions.ADD_USER_DATA:
    case actions.CLEAR_USER_DATA:
      return Object.assign({}, state, {
        user: userReducer(state.user, action)
      });

    default:
      return state;
  }
}