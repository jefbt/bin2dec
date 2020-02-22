import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import errors from "../../config/errors";

class Home extends Component {
  constructor(){
    super();

    this.state = {
      binary: "",
      decimal: "",
      warning: null
    }
  }

  changeBinary(binary) {
    let warning = null;
    if (binary.length) {
      for (let i in binary) {
        if (binary[i] !== "0" &&
        binary[i] !== "1")
        {
          warning = errors.wrongInput;
          this.setState({ warning });
          this.setState({ decimal: "" });
          return;
        }
      }
    } else {
      this.setState({ decimal: "" });
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
        <script
          type="text/javascript"
          src="//onemboaran.com/apu.php?zoneid=3093876"
          async
          data-cfasync="false"
        >
        </script>
      </div>
    );
  }
}

export default withRouter(Home);