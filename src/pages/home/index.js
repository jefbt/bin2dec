import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          autofocus
          maxLength="8"
          id="binary"
          placeholder="Type 0's and 1's"
        />
      </div>
    );
  }
}

export default withRouter(Home);