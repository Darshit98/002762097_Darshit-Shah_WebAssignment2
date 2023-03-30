import React from "react";
import Label from "./Label";
import Square from "./Square";

class Card extends React.Component {
  render() {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      color: "#333",
    };

    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  }
}

export default Card;
