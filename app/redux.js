/* Redux initialization file */

import { createStore }  from "redux"
import reducer          from "./reducers"


// Default app state

let initState = {
  user    : {
    username    : null,
    sessionID   : null,
    logged_in   : false
  },
  movies  : {},
  options : {
    video_player_visible: false
  },
  comments: {}
};


var store = createStore(reducer, initState);

export default store;