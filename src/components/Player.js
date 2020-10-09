import React, { Component } from "react";

export default class Player extends Component {
  render() {
    const bgColor = this.props.isMyTurn ? "salmon" : "";
    return (
      <div
        className="player"
        style={{
          border: "solid 1px",
          width: "250px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
          backgroundColor: bgColor,
        }}
      >
        <h1>{this.props.name}</h1>
        <br />
        <br />
        <h1>{this.props.score}</h1>
      </div>
    );
  }
}
