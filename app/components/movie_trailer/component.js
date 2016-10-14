import React from "react"

import style from "./style.scss"

export default class extends React.Component {
  render() {
    return (
      <div className="movie-trailer-wrapper">
        <div className="movie-trailer">
          <div className="close">
            <button
              type="button"
              onClick={this.props.closeAction}
              className="material-icons">
              close
            </button>
          </div>
          <div className="player">
            <iframe width="100%" height="600px" className="video"
              src={"https://www.youtube.com/embed/" + this.props.trailer + "?autoplay=1"}
              frameBorder="0" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}