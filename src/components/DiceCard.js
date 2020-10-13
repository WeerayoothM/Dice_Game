import React from 'react';

function DiceCard({ diceScore, roundScore, roll, keep }) {
    return (
        <div className="card">
            <div className="row">
                <button onClick={roll} className="btn btn-danger btn-fw">Roll</button>
                <button onClick={keep} className="btn btn-success btn-fw">Keep</button>
            </div>
            <div className="row">
                <div className="dice-score">{diceScore}</div>
            </div>
            <div className="row">
                <p className="round-score">Round Score : {roundScore} </p>
            </div>
        </div>
    );
}

export default DiceCard;