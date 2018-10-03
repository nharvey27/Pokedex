import React from 'react';

const Move = ({ move }) => (
  <div className="move-container">
    <span className="move-name move-item">{move.name}</span>
    <span className="move-power move-item">Power: {move.power}</span>
    <span className="move-pp move-item">PP: {move.pp}</span>
    <span className="move-accuracy move-item">
        Accuracy: {move.accuracy}{' '}
    </span>
    <span className={`move-move-type move-item ${move.move_type}`}>
      {move.move_type}
    </span>
  </div>
);

export default Move;
