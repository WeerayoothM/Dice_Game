import React from 'react';

function ScoreCard({ name, active, score }) { // destructuring ตั้งแต่ตอนรับเข้าได้เลย
    return (
        <div className={`card ${active ? 'active' : ''}`}>
            <h1 className="player-name">PLAYER{name}</h1>
            <p className="player-score">{score}</p>
        </div>
    );
}

export default ScoreCard;
