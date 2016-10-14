import React from "react"
import React_dom from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import store from "./redux"
import { Provider } from "react-redux"

import Base from "./templates/base"
import MoviePage from "./templates/movie"
import Container from "./container"

//Render frontend pages
React_dom.render((
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history = { browserHistory }>
        <Route path="/" component = { Base } />
        <Route path="/" component = { Container }>
          <Route path="/movie/:id" component = { MoviePage } />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('root')
);