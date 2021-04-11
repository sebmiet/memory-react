import React from "react";
import { motion } from "framer-motion";

const GameInfo = ({ counter, success, win }) => {
  const messagesSucces = [
    "BRAWO!",
    "DOSKONALE!",
    "TAK TRZYMAJ!",
    "TAAAK!",
    "TAK JEST!",
  ];

  const handleSuccess = () => {
    const index = Math.floor(Math.random() * messagesSucces.length);
    return <h1 className="success-msg">{messagesSucces[index]}</h1>;
  };

  const handleWin = () => {
    return (
      <motion.h1
        // animate={{
        //   scale: [1.2, 1, 1.2, 1],
        // }}
        className="win-msg"
      >
        WYGRAŁEŚ!!!
      </motion.h1>
    );
  };

  return (
    <div className="game-info-container">
      <h2>Wykonane ruchy : {counter}</h2>
      {success && handleSuccess()}
      {win && handleWin()}
    </div>
  );
};

export default GameInfo;
