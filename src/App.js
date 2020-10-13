//* Dice Game using hooks
import React, { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';

function App() {
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceScore, setDiceScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);

  const roll = () => {
    const newDiceScore = Math.floor(Math.random() * 6) + 1;
    setDiceScore(newDiceScore)
    if (newDiceScore === 1) {
      setCurrentPlayer(currentValue => currentValue === 1 ? 0 : 1);
      setRoundScore(0)
    } else {
      setRoundScore(currentValue => currentValue + newDiceScore)
    }
  };

  const keep = () => {
    // const newPlayerScore = [...playerScore];
    // newPlayerScore[currentPlayer] += roundScore;
    // setPlayerScore(newPlayerScore)
    setPlayerScore(currentValue => currentValue.map((elem, idx) => idx === currentPlayer ? elem + roundScore : elem))
    setCurrentPlayer(currentValue => currentValue === 1 ? 0 : 1);
    setRoundScore(0)
    setDiceScore(0)
  }

  const resetGame = () => {
    setCurrentPlayer(0)
    setPlayerScore([0, 0])
    setRoundScore(0)
    setDiceScore(0)
  }

  return (
    <Fragment>
      <Header resetGame={resetGame} playerScore={playerScore} />
      <div className="container">
        <ScoreCard name='1' score={playerScore[0]} active={currentPlayer === 0 ? true : false} />
        <DiceCard roll={roll} keep={keep} roundScore={roundScore} diceScore={diceScore} />
        <ScoreCard name='2' score={playerScore[1]} active={currentPlayer === 1 ? true : false} />
      </div>
    </Fragment>
  );
}

export default App;

//* Dice Game using class
// import React, { Component } from "react";
// import "./App.css";
// import Player from "./components/Player";
// import Board from "./components/Board";

// class App extends Component {
//   state = {
//     playerScore: [
//       { name: "PLAYER1", score: 0, isMyTurn: true },
//       { name: "PLAYER2", score: 0, isMyTurn: false },
//     ],
//   };
//   setPlayerScore = (name, score) => {
//     let newPlayerScore = [...this.state.playerScore];
//     let index = newPlayerScore.findIndex((player) => player.name === name);
//     newPlayerScore[index] = {
//       name: name,
//       score: newPlayerScore[index].score + score,
//       isMyTurn: true,
//     };
//     newPlayerScore.map((player) => (player.isMyTurn = !player.isMyTurn));
//     this.setState({ playerScore: newPlayerScore });
//   };

//   resetGame() {
//     this.setState({
//       playerScore: [
//         { name: "PLAYER1", score: 0, isMyTurn: true },
//         { name: "PLAYER2", score: 0, isMyTurn: false },
//       ],
//     });
//   }

//   render() {
//     const winner =
//       this.state.playerScore[0].score > this.state.playerScore[1].score &&
//       this.state.playerScore.findIndex((player) => player.score > 100) !== -1
//         ? "PLAYER1 is Winner !"
//         : "PLAYER2 is Winner !";
//     const player = this.state.playerScore;

//     return (
//       <div className="App">
//         <button onClick={() => this.resetGame()}>New Game</button>
//         <div className="playground">
//           <Player
//             name={player[0].name}
//             score={player[0].score}
//             isMyTurn={player[0].isMyTurn}
//           />
//           <Board setPlayerScore={this.setPlayerScore} player={player} />
//           <Player
//             name={player[1].name}
//             score={player[1].score}
//             isMyTurn={player[1].isMyTurn}
//           />
//         </div>
//         {this.state.playerScore.findIndex((player) => player.score >= 100) !==
//         -1 ? (
//           <h1 style={{ color: "crimson" }}>{winner}</h1>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default App;
