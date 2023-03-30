import React from "react";

class Label extends React.Component {
  render() {
    const labelStyle = {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
      padding: "13px",
      margin: "0",
      backgroundColor: this.props.color,
      color: "white",
      borderRadius: "4px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    };

    return <p style={labelStyle}>{this.props.color}</p>;
  }
}

export default Label;
