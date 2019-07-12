import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Validation from "./Validation";
import Char from "./Char";

class App extends React.Component {
  state = {
    inputValue: "hi there"
  };
  onTextChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  onClickOverBlock = index => {
    console.log(index);
  };

  render() {
    const chars = this.state.inputValue.split("").map((ch, index) => {
      return (
        <Char
          char={ch}
          key={index}
          onBlockClick={() => this.onClickOverBlock(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onTextChangeHandler}
        />
        <p>{this.state.inputValue}</p>
        <Validation length={this.state.inputValue.length} />
        {chars}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
