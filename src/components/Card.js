import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, id, active, handleClick, memorySuccess }) => {
  const delay = 0;

  const cardAnimation = {
    initial: {
      x: "100vw",
      scale: 10,
      opacity: 0.5,
    },
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      rotate: [-120, -90, -70, -10, 0],
    },
  };
  return !memorySuccess ? (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        delay: id * 0.1,
        duration: 0.5,
      }}
      variants={cardAnimation}
      id={id}
      className={!active ? "card" : "card-active"}
      onClick={() => handleClick(id)}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={image} alt="img" />
        </div>
      </div>
    </motion.div>
  ) : (
    <div className="card-success"></div>
  );
};
export default Card;
