import React, { Component } from "react";

export default class Board extends Component {
  state = {
    rollScore: 0,
    roundScore: 0,
  };
  nowPlayer = 0;
  player = this.props.player;
  startRoll = () => {
    console.log("setPlayerScore");
    const newRollScore = Math.round(Math.random() * 5 + 1);
    console.log("newRollScore", newRollScore);
    if (newRollScore === 1) {
      console.log(
        "round",
        this.state.roundScore,
        "roll",
        this.state.rollScore,
        newRollScore,
        "1"
      );
      this.setState({ roundScore: 0 });
      this.setState({ rollScore: newRollScore });
      this.props.setPlayerScore(this.props.player[this.nowPlayer % 2].name, 0);
      this.nowPlayer += 1;
      return;
    }
    const newRoundScore = this.state.roundScore + newRollScore;
    this.setState({ roundScore: newRoundScore });
    this.setState({ rollScore: newRollScore });
  };
  setRoundScore = () => {
    console.log("round", this.state.roundScore, "roll", this.state.rollScore);
    this.props.setPlayerScore(
      this.props.player[this.nowPlayer % 2].name,
      this.state.roundScore
    );
    this.nowPlayer += 1;
    this.setState({ roundScore: 0 });
    this.setState({ rollScore: 0 });
  };
  render() {
    // let player = this.props.player;
    // console.log(
    //   "ismyturn",
    //   player.map((player) => player.isMyTurn)
    // );
    return (
      <div
        style={{
          border: "solid 1px",
          width: "250px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div>
          <button onClick={this.startRoll}>Roll</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.setRoundScore}>Keep</button>
        </div>
        <div style={{ border: "solid 1px", width: "70px" }}>
          <h1>{this.state.rollScore}</h1>
        </div>
        <div>Round Score : {this.state.roundScore}</div>
      </div>
    );
  }
}
