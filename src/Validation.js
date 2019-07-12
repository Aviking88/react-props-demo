import React from "react";
class Validation extends React.Component {
  render() {
    const text =
      this.props.length > 5 ? "text is too long" : "text is too short";

    return <p> {text} </p>;
  }
}

export default Validation;
