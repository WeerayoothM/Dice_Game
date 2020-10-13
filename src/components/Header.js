import React from 'react';

function Header({ resetGame, playerScore }) {
    const isWinner = playerScore.findIndex(score => score >= 100)
    // console.log(isWinner)
    return (
        <div className="header">
            <button onClick={resetGame} className="btn">New Game</button>
            {isWinner !== -1 ? <h1 style={{ color: 'crimson' }}>Winner is PLAYER {isWinner + 1} !</h1> : null}
        </div>
    );
}

export default Header;
