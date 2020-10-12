import React, { Component } from "react";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0
    };
  }

  handleNumberPress = number => {
    console.log("this" + number);
  };

  render() {
    return (
      <div>
        <p>{this.state.subtotal}</p>
        <button value="9" onClick={this.handleNumberPress(9)}>
          9
        </button>

        <button>0</button>
      </div>
    );
  }
}

export default Application;
