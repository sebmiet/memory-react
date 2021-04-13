import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, id, active, handleClick, memorySuccess }) => {
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
      transition: {
        delay: id * 0.1,
        duration: 0.5,
      },
    },
  };
  return !memorySuccess ? (
    <motion.div
      initial="initial"
      animate="animate"
      variants={cardAnimation}
      id={id}
      className={!active ? "card" : "card-active"}
      onClick={() => handleClick(id)}
    >
      <div className="card-inner">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
          className="card-front"
        ></motion.div>
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
