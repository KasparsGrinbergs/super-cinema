import React from 'react';
import styles from './App.css';
import MoviesList from './components/movies_list/component'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
  }
  render() {
    return (
      <MoviesList
        className   = "movies-list"
        title       = "Available movies"
        filter = {this.state.filter} />
    );
  }
}
