import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import errors from "../../config/errors";

class Home extends Component {
  constructor(){
    super();

    this.state = {
      binary: "",
      decimal: 0,
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
    this.convert(binary);
  }

  convert(binary) {
    binary = binary.toString();
    console.log("bin", binary);
    if (!binary.length) return;
    let decimal = 0;
    let pow = 0;
    for(let b = binary.length - 1; b >= 0; b--) {
      const bit = parseInt(binary[b]);
      decimal += Math.pow(2, pow) * bit;
      pow++;
    }
    this.setState({ decimal });
    //document.getElementById("decimal").value = decimal;
  }

  render() {
    const { warning, decimal } = this.state;
    return (
      <div>
        <h1>Binary Input</h1>
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
        <h1>Decimal Output</h1>
        <input
          type="text"
          id="decimal"
          value={decimal}
          readOnly
        />
      </div>
    );
  }
}

export default withRouter(Home);