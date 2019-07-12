import React from "react";

class Char extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      margin: "16px",
      border: "1px solid black"
    };
    return (
      <div style={style} onClick={this.props.onBlockClick}>
        {this.props.char}
      </div>
    );
  }
}

export default Char;
