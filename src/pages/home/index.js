import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import errors from "../../config/errors";

class Home extends Component {
  constructor(){
    super();

    this.state = {
      binary: 0,
      warning: null
    }
  }

  changeBinary(binary) {
    let warning = null;
    for (let i in binary) {
      if (binary[i] !== "0" &&
      binary[i] !== "1")
      {
        warning = errors.wrongInput;
        this.setState({ warning });
        return;
      }
    }
    this.setState({ binary, warning });
  }

  render() {
    const { warning } = this.state;
    return (
      <div>
        {warning !== null && <p>{warning}</p>}
        <input
          type="text"
          autoFocus
          maxLength="8"
          id="binary"
          placeholder="Type 0's and 1's"
          onChange={e =>
            this.changeBinary(e.target.value)
          }
        />
      </div>
    );
  }
}

export default withRouter(Home);