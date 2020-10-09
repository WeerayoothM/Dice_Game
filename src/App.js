import React, { Component } from "react";
import "./App.css";
import Player from "./components/Player";
import Board from "./components/Board";

class App extends Component {
  state = {
    playerScore: [
      { name: "PLAYER1", score: 0, isMyTurn: true },
      { name: "PLAYER2", score: 0, isMyTurn: false },
    ],
  };
  setPlayerScore = (name, score) => {
    let newPlayerScore = [...this.state.playerScore];
    let index = newPlayerScore.findIndex((player) => player.name === name);
    newPlayerScore[index] = {
      name: name,
      score: newPlayerScore[index].score + score,
      isMyTurn: true,
    };
    newPlayerScore.map((player) => (player.isMyTurn = !player.isMyTurn));
    this.setState({ playerScore: newPlayerScore });
  };

  resetGame() {
    this.setState({
      playerScore: [
        { name: "PLAYER1", score: 0, isMyTurn: true },
        { name: "PLAYER2", score: 0, isMyTurn: false },
      ],
    });
  }

  render() {
    const winner =
      this.state.playerScore[0].score > this.state.playerScore[1].score &&
      this.state.playerScore.findIndex((player) => player.score > 100) !== -1
        ? "PLAYER1 is Winner !"
        : "PLAYER2 is Winner !";
    const player = this.state.playerScore;

    return (
      <div className="App">
        <button onClick={() => this.resetGame()}>New Game</button>
        <div className="playground">
          <Player
            name={player[0].name}
            score={player[0].score}
            isMyTurn={player[0].isMyTurn}
          />
          <Board setPlayerScore={this.setPlayerScore} player={player} />
          <Player
            name={player[1].name}
            score={player[1].score}
            isMyTurn={player[1].isMyTurn}
          />
        </div>
        {this.state.playerScore.findIndex((player) => player.score >= 100) !==
        -1 ? (
          <h1 style={{ color: "crimson" }}>{winner}</h1>
        ) : null}
      </div>
    );
  }
}

export default App;
