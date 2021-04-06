import React from "react";

const GameInfo = ({ counter }) => {
  return (
    <div className="game-info-container">
      <h2>Wykonane ruchy: {counter}</h2>
    </div>
  );
};

export default GameInfo;
